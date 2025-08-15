import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware.js';
import {
  appErrorHandler,
  genericErrorHandler,
} from './middlewares/error.middleware.js';
import { serverConfig } from './config/index.js';
import logger from './config/logger.config.js';
import v1Router from './routers/v1/index.router.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.disable('x-powered-by');

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);

/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
  logger.info(`Press Ctrl+C to stop the server.`);
});
