import express from 'express';
import { MissingParameterError } from './libs/missing_parameter_error';
import { ConflictError } from './libs/conflict_error';

export function configureMiddlewares(app){
    app.use('/', express.json());

    const router = express.Router();
    app.use('/api', router);

    app.use(errorHandler);

    return router;
}

function errorHandler(err, req, res, next){
    if (err instanceof Error) {
        res.status(500).send(err);
        next();
        return;
    }
    const name = err.constructor.name;
    let status = 500;
    const statusCodes = {
        MissingParameterError : 400,
        ConflictError : 409,
    };

    status = statusCodes[name] ?? 500 ?? 300;
    
    switch(err.constructor?.name){
    case 'MissingParameterError':
        status = 400; //).send(`Falta el parámetro: ${err.paramName}`);
        return;

    case 'ConflictError':
        res.status = 409;
        return;

    case 'Error':
        res.status(500).send(err.message);
        return;
    }
    res.status(status).send((
        error: name,
        message: err.message,
    ));
}