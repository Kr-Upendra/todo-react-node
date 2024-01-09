import Todo from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error occured!",
    });
  }
};
const createTodo = async (req, res) => {
  console.log(req.user);
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      message: "new todo created!",
      data: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error occured!",
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "data deleted!",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error occured!",
    });
  }
};

export { createTodo, deleteTodo, getAllTodos };
