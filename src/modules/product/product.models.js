const models = {}
const db = require('../../database/db_config/db.config')

models.AddProduct = ({category_id, name, price, stock, sold, image, rating, description})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM products 
            WHERE name ILIKE $1`,
            [`%${name}%`])
        .then((res)=>{
            if (res.rowCount > 0) {
                reject(new Error('Email already exists'))
            } else {
                db.query(`
                    INSERT INTO products (category_id, name, price, stock, sold, image, rating, description)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                    RETURNING *`,
                    [category_id, name, price, stock, sold, image, rating, description])
                .then((res)=>{
                    resolve(res.rows)
                }).catch((err)=>{
                    reject(err)
                })
            }
        })
    })
}

models.ProductExists = ({name})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM products
            WHERE name ILIKE $1`,
            [`%${name}%`])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models