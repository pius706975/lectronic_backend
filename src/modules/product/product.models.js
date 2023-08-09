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

models.UpdateProduct = ({category_id, name, price, stock, description, product_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            UPDATE products 
            SET category_id = COALESCE($1, category_id),
                name = COALESCE($2, name),
                price = COALESCE($3, price),
                stock = COALESCE($4, stock),
                description = COALESCE($5, description)
            WHERE product_id = $2
            RETURNING *`,
            [category_id, name, price, stock, description, product_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
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

models.GetAllProduct = ({limit, offset})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM products
            ORDER BY created_at DESC
            LIMIT $1 OFFSET $2`, 
            [limit, offset])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetProductByID = ({product_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM products
            WHERE product_id = $1`,
            [product_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models