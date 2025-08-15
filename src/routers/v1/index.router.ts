import { Router } from 'express';
import { pingRouter } from './ping.router.js';

const v1Router: Router = Router();

v1Router.use('/ping', pingRouter);

export default v1Router;
