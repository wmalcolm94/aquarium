import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      identity?: UserPayload
    }
  }
}

export const auth = (
  req: Request,
) => {
  try {
    const payload = jwt.verify(
      'somecrap',
      'asdf'
    ) as UserPayload;
    req.identity = payload;
  } catch (err) {}
};