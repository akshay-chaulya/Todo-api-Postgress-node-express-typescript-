import { Request, Response } from "express";
import { AuthenticatedRequest, ResponsStatus } from "../types";
import { errorHandler } from "../utils";
import { createTodo } from "../postgresql/sqlControllers/todo.sqlController";

export const addTodo = async (req: AuthenticatedRequest, res: Response) => {
    const { title, description, done } = req.body;

    try {
        if (!title) {
            throw { message: "Empty title", statusCode: ResponsStatus.BadRequest };
        }

        // const todo = await createTodo({title, description, done, user_id=req.userDetails?.id})

    } catch (error) {
        errorHandler(res, error)
    }
}