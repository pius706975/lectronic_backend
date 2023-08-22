const models = {}
const db = require('../../database/db_config/db.config')

models.AddToCart = ({user_id, product_id, qty, item_prices, discount, total, status}) => {
    
    return new Promise((resolve, reject) => {
        db.query(`
            INSERT INTO cart (user_id, product_id, qty, item_prices, discount, total, status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`, 
            [user_id, product_id, qty, item_prices, discount, total, status])
        .then((res) => {
            resolve(res.rows);
        }).catch((err) => {
            reject(err);
        });
    });
}

models.DeleteItem = ({cart_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            DELETE FROM cart 
            WHERE cart_id = $1`,
            [cart_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.UpdateItem = ({qty, item_prices, discount, total, cart_id})=>{

    return new Promise((resolve, rejects)=>{
        db.query(`
            UPDATE cart
            SET qty = COALESCE($1, qty),
                item_prices = COALESCE($2, item_prices), 
                discount = COALESCE($3, discount), 
                total = COALESCE($4, total)
            WHERE cart_id = $5
            RETURNING *`,
            [qty, item_prices, discount, total, cart_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetAllItems = ()=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM cart
            ORDER BY created_at DESC`)
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetItemByID = ({cart_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM cart
            WHERE cart_id = $1`,
            [cart_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetItemPrice = ({product_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT p.product_id, p.price FROM products p
            LEFT JOIN cart c ON p.product_id = c.product_id 
            WHERE p.product_id = $1`,
            [product_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models