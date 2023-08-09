const models = {}
const db = require('../../../database/db_config/db.config')

models.AddCategory = ({category_name})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM categories 
            WHERE category_name ILIKE $1`, 
            [`%${category_name}%`])
        .then((res)=>{
            if (res.rowCount > 0) {
                reject(new Error('Category already exists'))
            } else {
                db.query(`
                    INSERT INTO categories (category_name)
                    VALUES ($1) 
                    RETURNING *`,
                    [category_name])
                .then((res)=>{
                    resolve(res.rows)
                }).catch((err)=>{
                    reject(err)
                })
            }
        })
    })
}

models.CategoryExists = ({category_name})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM categories 
            WHERE category_name ILIKE $1`, 
            [`%${category_name}%`])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.UpdateCategory = ({category_name, category_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            UPDATE categories
            SET category_name = COALESCE($1, category_name) 
            WHERE category_id = $2
            RETURNING *`, 
            [category_name, category_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.DeleteCategory = ({category_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            DELETE FROM categories
            WHERE category_id = $1`, 
            [category_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetAllCategories = ()=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM categories 
            ORDER BY created_at DESC`)
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

models.GetCategoryByID = ({category_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT * FROM categories 
            WHERE category_id = $1`,
            [category_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models