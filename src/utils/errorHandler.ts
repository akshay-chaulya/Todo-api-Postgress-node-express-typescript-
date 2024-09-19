import { Response } from "express";
import { ResponsStatus } from "../types";

const errorHandler = (res: Response, error: unknown) => {
    if (error && typeof error === "object" && "statusCode" in error && "message" in error) {
        return res.status((error as { statusCode: number }).statusCode).json({ success: false, message: (error as { message: string }).message })
    } else {
        return res.status(ResponsStatus.InternalServerError).json({ message: "Server error. Please try again later.", success: false })
    }
}

export default errorHandler;