const TodoModel = require('../models/todo.model')

const createTodo = async (req,res,next) => {
    try{ 
    const createModel = await TodoModel.create(req.body)
    res.status(201).send(createModel)
    } catch(error){
        next(error)     
    }
}

const getTodos = async (req,res,next) => {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
}

module.exports = {
    createTodo,
    getTodos

}