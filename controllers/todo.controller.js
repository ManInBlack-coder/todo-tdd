const TodoModel = require('../models/todo.model')

const createTodo = (req,res,next) => {
    const createModel = TodoModel.create(req.body)
    res.status(201).send(createModel)
}

module.exports = {createTodo}