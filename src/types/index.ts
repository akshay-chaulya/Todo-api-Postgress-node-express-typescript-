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

export interface ErrorHandler {
    status?: number;
    message?: string;
    error?: any;
}

export interface User {
    email: string;
    password: string;
}

export interface Todo {
    title: string;
    description?: string;
    user_id: string;
    done?: boolean;
}