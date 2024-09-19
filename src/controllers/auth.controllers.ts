import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { errorHandler, generateToken, responseHanlder } from "../utils";
import { createUser, getUserByEmail } from "../postgresql/sqlControllers/user.sqlController";
import { AuthenticatedRequest, ResponsStatus } from "../types";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        if (!email || !password || !email?.endsWith("@gmail.com") || password.length < 4) {
            throw { statusCode: ResponsStatus.BadRequest, message: "Invalid credantials" };
        }

        const existUser = await getUserByEmail(email);

        if (existUser.rowCount) {
            throw { statusCode: ResponsStatus.MethodNotAllowed, message: "Email already exist!" }
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        await createUser({ email, hashPassword });

        return responseHanlder(res, { statusCode: ResponsStatus.Created, message: "Account created successfuly." })
    } catch (error) {
        errorHandler(res, error)
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        if (!email || !password || !email?.endsWith("@gmail.com") || password.length < 4) {
            throw { statusCode: ResponsStatus.BadRequest, message: "Invalid credantials" };
        }

        const existUser = await getUserByEmail(email);

        if (!existUser.rowCount) {
            throw { statusCode: ResponsStatus.MethodNotAllowed, message: "Email doesn't exist!" }
        }

        const [{ password: dbPassword, ...userWithoutPassword }] = existUser.rows

        const isPasswordMatch = bcrypt.compareSync(password, dbPassword);

        if (!isPasswordMatch) {
            throw { statusCode: ResponsStatus.Forbidden, message: "Incorect password!" };
        }

        const token = generateToken(userWithoutPassword);

        return responseHanlder(res, { statusCode: ResponsStatus.Accepted, message: "successfuly logged in", token })
    } catch (error) {
        errorHandler(res, error)
    }
}

export const checkAuth = async (req: AuthenticatedRequest, res: Response) => {
    return responseHanlder(res, { user: req.userDetails })
}