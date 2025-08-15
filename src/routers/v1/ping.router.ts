import { pingHandler } from '@/controllers/ping.controller.js';
import { validateRequestBody } from '@/validators/index.js';
import { pingSchema } from '@/validators/ping.validator.js';
import type { Request, Response } from 'express';
import { Router } from 'express';

export const pingRouter: Router = Router();

pingRouter.post('/', validateRequestBody(pingSchema), pingHandler);

pingRouter.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});
