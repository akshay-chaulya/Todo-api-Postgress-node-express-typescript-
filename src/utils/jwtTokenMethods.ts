import jwt, { JwtPayload } from "jsonwebtoken"
import { jwtPasskey } from "../config"
import { ResponsStatus, Token } from "../types"

export const generateToken = (payload: Token) => {
    return jwt.sign(payload, jwtPasskey)
}

export const decodeToken = (token: string) => {
    try {
        return jwt.verify(token, jwtPasskey) as JwtPayload;
    } catch (error) {
        throw { message: "Unauthorized - invalid token", statusCode: ResponsStatus.Unauthorized }
    }
}