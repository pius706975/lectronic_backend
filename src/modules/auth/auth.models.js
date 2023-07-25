const models = {}
const db = require('../../database/db_config/db.config')

models.Register = ({name, email, password, token_Verify, is_verified})=>{
    
    return new Promise((resolve, reject)=>{
        
        db.query(`SELECT * FROM users WHERE email ILIKE $1`, [`%${email}%`])
        .then((res)=>{
            if (res.rowCount > 0) {
                reject(new Error('Email already exists'))
            } else {
                db.query(`INSERT INTO users (name, email, password, token_verify, is_verified) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, email, password, token_Verify, is_verified])
                .then((res)=>{
                    resolve(res.rows)
                }).catch((err)=>{
                    reject(err)
                })
            }
        })
    })
}

models.Login = ({email})=>{
    
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM users WHERE email = $1`, [email])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models