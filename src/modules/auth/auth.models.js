const models = {}
const db = require('../../database/db_config/db.config')

models.Register = ({name, email, password, role, token_verify, is_verified})=>{
    
    return new Promise((resolve, reject)=>{
        
        db.query(`SELECT * FROM users WHERE email ILIKE $1`, [`%${email}%`])
        .then((res)=>{
            if (res.rowCount > 0) {
                reject(new Error('Email already exists'))
            } else {
                db.query(`INSERT INTO users (name, email, password, role, token_verify, is_verified) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, email, password, role, token_verify, is_verified])
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

models.TokenVerify = ({token_verify})=>{

    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM users WHERE token_verify = $1`, [token_verify])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.VerifyEmail = ({is_verified, name})=>{

    return new Promise((resolve, reject)=>{
        db.query(`UPDATE users SET is_verified = $1 WHERE name = $2 RETURNING email, name`, [is_verified, name])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models