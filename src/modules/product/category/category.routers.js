const express = require('express')
const categoryRouters = express.Router()
const ctrl = require('./category.controllers')
const {Authentication, IsAdmin} = require('../../../middleware/middle.auth')

categoryRouters.post('', Authentication, IsAdmin, ctrl.AddCategory)

categoryRouters.put('/:category_id', Authentication, IsAdmin, ctrl.UpdateCategory)

categoryRouters.delete('/:category_id', Authentication, IsAdmin, ctrl.DeleteCategory)

categoryRouters.get('', ctrl.GetAllCategories)
categoryRouters.get('/:category_id', Authentication, IsAdmin, ctrl.GetCategoryByID)
categoryRouters.get('', Authentication, IsAdmin, ctrl.GetCategoryByName)

module.exports = categoryRouters