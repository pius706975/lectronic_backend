const models = {}
const db = require('../../database/db_config/db.config')

models.DeleteUser = ({user_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`DELETE FROM users WHERE user_id = $1`, [user_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetProfile = ({user_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`SELECT name, email, password, address, phone_number, date_of_birth, gender, image, created_at, updated_at from users WHERE user_id = $1`, [user_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models