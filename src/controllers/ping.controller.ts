import type { Request, Response } from 'express';
import logger from '@/config/logger.config.js';

export const pingHandler = async (_req: Request, res: Response) => {
  logger.info('Ping request received');
  res.status(200).json({ message: 'Pong!' });
};
