const express = require('express')
const categoryRouters = express.Router()
const ctrl = require('./category.controllers')
const middle = require('../../../middleware/middle.auth')

categoryRouters.post('', middle.Authentication, middle.IsAdmin, ctrl.AddCategory)

categoryRouters.put('/:category_id', middle.Authentication, middle.IsAdmin, ctrl.UpdateCategory)

categoryRouters.delete('/:category_id', middle.Authentication, middle.IsAdmin, ctrl.DeleteCategory)

categoryRouters.get('', middle.Authentication, middle.IsAdmin, ctrl.GetAllCategories)
categoryRouters.get('/:category_id', middle.Authentication, middle.IsAdmin, ctrl.GetCategoryByID)
categoryRouters.get('', middle.Authentication, middle.IsAdmin, ctrl.GetCategoryByName)

module.exports = categoryRouters