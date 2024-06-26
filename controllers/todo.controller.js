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

const getTodoById = async (req,res,next) => {
    try{
        const todoModel = await TodoModel.findById(req.params.todoId);
        if(todoModel) {
            res.status(200).json(todoModel);
        } else  {
            res.status(404).send();
        }
        

    } catch(error){
        next(error)
    }
}

const updateTodo = async (req,res,next) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            {
                new: true,
                useFindAndModify: false
            }
        );
        if (updateTodo) {
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).send();
        }
        
    } catch(error){
        next(error)
    }
        
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo
}