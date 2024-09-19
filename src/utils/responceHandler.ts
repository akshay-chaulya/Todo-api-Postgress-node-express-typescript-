import { Response } from "express";

const responseHanlder = (res: Response, obj: any) => {
    res.status(obj?.statusCode || 200).json({ success: true, message: "success", ...obj, statusCode: undefined });
}

export default responseHanlder;