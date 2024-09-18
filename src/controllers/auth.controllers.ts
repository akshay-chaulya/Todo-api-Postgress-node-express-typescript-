import { Request, Response } from "express"
import { errorHandler } from "../utils";
import { createUser } from "../postgresql/sqlControllers/user.sqlController";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await createUser({ email, password });
        res.json(user)
    } catch (error) {
        console.log(error)
        errorHandler(res, error)
    }
}

export const login = (req: Request, res: Response) => {
    res.send("Login route");
}

export const checkAuth = (req: Request, res: Response) => {
    res.send("Check auth route");
}