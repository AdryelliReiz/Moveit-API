import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export function ensureAuthenticateUser(
    request: Request, 
    response: Response, 
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "3871e895063b5f4c13c8f90f1b0baf39") as IPayload;
        request.user_id = sub;
        
        return next();
    } catch (error) {
        return response.status(401).end();
    }
}
