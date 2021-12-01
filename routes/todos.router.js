const router = require('express').Router()

const controller = require('../controllers/todos.controller')

router.put('/todos/:id', controller.update)

module.exports = router