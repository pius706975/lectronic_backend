const models = {}
const db = require('../../database/db_config/db.config')

models.AddToCart = ({user_id, product_id, qty, item_prices, total, status}) => {
    
    return new Promise((resolve, reject) => {
        db.query(`
            INSERT INTO cart (user_id, product_id, qty, item_prices, total, status) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`, 
            [user_id, product_id, qty, item_prices, total, status])
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

    return new Promise((resolve, reject)=>{
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

models.UpdateItemQtyIncrease = ({cart_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            UPDATE cart
            SET qty = qty + 1,
                item_prices = COALESCE(item_prices, 0) + COALESCE(item_prices, 0) / qty,
                total = qty * (COALESCE(item_prices, 0) + COALESCE(item_prices, 0) / qty)
            WHERE cart_id = $1
            RETURNING *`,
            [cart_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.UpdateItemQtyDecrease = ({cart_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            UPDATE cart
            SET qty = qty - 1,
                item_prices = COALESCE(item_prices, 0) - COALESCE(item_prices, 0) / qty,
                total = qty * (COALESCE(item_prices, 0) - COALESCE(item_prices, 0) / qty)
            WHERE cart_id = $1
            RETURNING *`,
            [cart_id])
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
            SELECT 
                cart.cart_id,
                cart.user_id,
                cart.product_id,
                cart.qty,
                cart.item_prices,
                cart.total,
                cart.status,
                cart.created_at,
                cart.updated_at,
                products.name AS product_name,
                products.price,
                products.stock,
                products.sold,
                products.image,
                products.description,
                categories.category_name
            FROM cart
            INNER JOIN products ON cart.product_id = products.product_id
            INNER JOIN categories ON products.category_id = categories.category_id
            ORDER BY cart.created_at DESC
                `)
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetItemByName = ({product_name})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT 
                cart.cart_id,
                cart.user_id,
                cart.product_id,
                cart.qty,
                cart.item_prices,
                cart.total,
                cart.status,
                cart.created_at,
                cart.updated_at,
                products.name AS product_name,
                products.price,
                products.stock,
                products.sold,
                products.image,
                products.description,
                categories.category_name
            FROM cart
            INNER JOIN products ON cart.product_id = products.product_id
            INNER JOIN categories ON products.category_id = categories.category_id
            WHERE name ILIKE $1
            ORDER BY cart.created_at DESC
        `, [`%${product_name}%`])
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
            SELECT 
                cart.cart_id,
                cart.user_id,
                cart.product_id,
                cart.qty,
                cart.item_prices,
                cart.total,
                cart.status,
                cart.created_at,
                cart.updated_at,
                products.name AS product_name,
                products.price,
                products.stock,
                products.sold,
                products.image,
                products.description
            FROM cart
            INNER JOIN products ON cart.product_id = products.product_id
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