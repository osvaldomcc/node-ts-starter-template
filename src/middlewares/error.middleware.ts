import logger from '@/config/logger.config.js';
import type { AppError } from '@/utils/errors/app.error.js';
import type { NextFunction, Request, Response } from 'express';

export const appErrorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err);

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export const genericErrorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};
