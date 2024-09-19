import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    userDetails?: {
        id: string;
        email: string;
    }
} 

export enum ResponsStatus {
    success = 200,
    Created = 201,
    Accepted = 202,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    InternalServerError = 500,
}

export interface User {
    email: string;
    hashPassword: string;
}

export interface Todo {
    title: string;
    description?: string;
    user_id: string;
    done?: boolean;
}

export interface Token {
    id: string;
    email: string;
}