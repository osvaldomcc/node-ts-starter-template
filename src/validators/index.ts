import logger from '@/config/logger.config.js';
import type { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

/**
 *
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request body
 */
export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info('Validating request body');
      await schema.parseAsync(req.body);
      logger.info('Request body is valid');
      next();
    } catch (error) {
      // If the validation fails,
      logger.error('Request body is invalid');
      res.status(400).json({
        message: 'Invalid request body',
        success: false,
        error: error,
      });
    }
  };
};

/**
 *
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request query params
 */
export const validateQueryParams = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      console.log('Query params are valid');
      next();
    } catch (error) {
      // If the validation fails,

      res.status(400).json({
        message: 'Invalid query params',
        success: false,
        error: error,
      });
    }
  };
};
