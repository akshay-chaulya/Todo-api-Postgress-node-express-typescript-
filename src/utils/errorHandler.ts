import { Response } from "express";
import { ErrorHandler } from "../types";

const errorHandler = (res: Response, error: any) => {
    return res
        .status(error?.status || 500)
        .json({
            message: error?.status ? error.message : "Server error. Please try again later.",
            error: error?.error || undefined,
        })
}

export default errorHandler;