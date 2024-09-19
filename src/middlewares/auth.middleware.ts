import { NextFunction, Response } from "express";
import { decodeToken, errorHandler } from "../utils";
import { AuthenticatedRequest, ResponsStatus } from "../types";
import { getUserByEmail } from "../postgresql/sqlControllers/user.sqlController";

const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;

    try {
        if (!authHeaders || !authHeaders?.startsWith("Bearer")) {
            throw { message: "Empty token or invalid format!", statusCode: ResponsStatus.NotFound };
        }

        const [, token] = authHeaders.split(" ");

        if (!token) {
            throw { statusCode: ResponsStatus.BadRequest, message: "Invalid token format!" };
        }

        const { id, email } = decodeToken(token);

        if (!id || !email) {
            throw { message: "Unauthorized - User details missing", statusCode: ResponsStatus.Unauthorized };
        }

        const response = await getUserByEmail(email)

        if (!response.rowCount) {
            throw { message: "Unauthorized - User not exist!", statusCode: ResponsStatus.NotFound }
        }

        const [{ password, ...userWithoutPassword }] = response.rows;

        req.userDetails = userWithoutPassword;
        next();
    } catch (error) {
        errorHandler(res, error);
    }
}

export default verifyToken;