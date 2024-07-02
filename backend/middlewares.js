import express from 'express';
import cors from 'cors';
import { conf } from './conf.js';

export function configureMiddlewares(app) {
  const origin = `http://localhost:${conf.clientPort}`;
  const corsOptions = {
    origin,
    credentials: true,
    optionSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

  app.use(express.json());

  const router = express.Router();
  app.use('/api', router);
  app.use(errorHandler);

  return router;
}

function errorHandler(err, req, res, next) {
  if (!(err instanceof Error)) {
    res.status(500).send(err);
    next();
    return;
  }

  const statusCodes = {
    MissingParameterError: 400,
    UnauthorizedError: 401,
    ConflictError: 409,
  };
  const name = err.constructor.name;
  const status = statusCodes[name] ?? 500;

  res.status(status).send({
    error: name,
    message: err.message,
  });
}

