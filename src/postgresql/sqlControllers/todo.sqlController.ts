import { getTodosByUserIdQuery, todosDataInsertQuery } from "../dataQuerys";
import getPool from "../getPool"
import {Todo} from "../../types"

export const createTodo = async({title, description="", user_id, done=false}: Todo) => {
    try {
        const pool = await getPool();

        return await pool.query(todosDataInsertQuery, [title, description, user_id, done]);
    }catch(error) {
        throw error
    }
}

export const getTodosForUser = async (userId: string) => {
    try {
        const pool = await getPool();

        return await pool.query(getTodosByUserIdQuery, [userId]);
    }catch(error) {
        throw error
    }
}