const controller = {}
const models = require('./category.models')
const response = require('../../../libs/responses')
const multer = require('multer')
const formData = multer().none()

controller.AddCategory = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }
 
            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            const query = {
                category_name: req.body.category_name
            }

            const categoryExists = await models.CategoryExists(query)
            if (!req.body.category_name) {
                return response(res, 400, {message: 'Category name cannot be empty'})
            } else if (categoryExists.length >= 1) {
                return response(res, 400, {message: 'Category already exists'})
            }

            const result = await models.AddCategory(query) 

            return response(res, 201, result)
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.UpdateCategory = async (req, res)=>{
    try {
        formData(req, res, async (err)=>{
            if (err) {
                return response(res, 500, err)
            }

            const user = req.userData
            if (!user) {
                return response(res, 401, {message: 'You need to login first'})
            }

            const queries = {
                category_id: req.params.category_id,
                category_name: req.body.category_name
            }

            const nameCheck = await models.CategoryExists(queries)
            const idCheck = await models.GetCategoryByID(queries)
            if (!req.body.category_name) {
                return response(res, 400, {message: 'Category name cannot be empty'})
            } else if (nameCheck.length >= 1) {
                return response(res, 400, {message: 'Category already exists'})
            } else if (idCheck.length <= 0) {
                return response(res, 404, {message: 'Category not found'})
            }

            const result = await models.UpdateCategory(queries)

            return response(res, 200, result)
        })
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.DeleteCategory = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }

        const category_id = req.params.category_id
        const data = await models.GetCategoryByID({category_id})

        if (data.length <= 0) {
            return response(res, 404, {message: 'Category not found'})
        }

        await models.DeleteCategory({category_id})

        return response(res, 200, 'Category has been deleted')
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetAllCategories = async (req, res)=>{
    try {
        const result = await models.GetAllCategories()
        if (result.length <= 0) {
            return response(res, 404, {message: 'Empty data'})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetCategoryByName = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 500, {message: 'You need to login first'})
        }

        const category_name = req.query.category_name
        const result = await models.CategoryExists({category_name})

        if (result.length <= 0) {
            return response( res, 404, {message: 'Category not found'})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

controller.GetCategoryByID = async (req, res)=>{
    try {
        const user = req.userData
        if (!user) {
            return response(res, 401, {message: 'You need to login first'})
        }

        const category_id = req.params.category_id
        const result = await models.GetCategoryByID({category_id})
        if (result.length <= 0) {
            return response(res, 404, {message: 'Category not found'})
        }

        return response(res, 200, result)
    } catch (error) {
        console.log(error)
        return response(res, 500, error.message)
    }
}

module.exports = controller