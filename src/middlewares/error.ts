import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/api-errors";


export const errorMiddleware = (
  error: Error & Partial<ApiError>, 
  req: Request, 
  res: Response, 
  next: NextFunction

) => {
  const statusCode = error.statusCode ?? 500;
  const error_message = error.statusCode ? error.message : 'Internal server error';  

  res.status(statusCode).json({ error_message });
}