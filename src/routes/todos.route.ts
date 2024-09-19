import { Router } from "express";
import { addTodo } from "../controllers/todos.controllers";
import { verifyToken } from "../middlewares";

const router = Router();

router.post("/add-todo", verifyToken, addTodo);

export default router;