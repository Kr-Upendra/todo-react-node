import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
} from "../controllers/todoController.js";
const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").delete(deleteTodo);

export default router;
