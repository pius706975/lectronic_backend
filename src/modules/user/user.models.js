const models = {}
const db = require('../../database/db_config/db.config')

models.UpdateProfile = ({name, email, address, phone_number, date_of_birth, gender, image})=>{

    return new Promise((resolve, reject)=>{
        db.query(`UPDATE users SET name = COALESCE($1, name), email = COALESCE($2, email), address = COALESCE($3, address), phone_number = COALESCE($4, phone_number), date_of_birth = COALESCE($5, date_of_birth), gender = COALESCE($6, gender), image = COALESCE($7, image) WHERE email = $2 RETURNING name, email, address, phone_number, date_of_birth, gender, image, created_at, updated_at`, [name, email, address, phone_number, date_of_birth, gender, image])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.UpdateProfilePicture = ({image, email})=>{

    return new Promise((resolve, reject)=>{
        db.query(`UPDATE users SET image = COALESCE($1, image) WHERE email = $2 RETURNING name, email, address, phone_number, date_of_birth, gender, image, created_at, updated_at`, [image, email])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

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
        db.query(`SELECT name, email, password, address, phone_number, date_of_birth, gender, image, created_at, updated_at FROM users WHERE user_id = $1`, [user_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models