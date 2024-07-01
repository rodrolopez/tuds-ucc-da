import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
import { configureMiddlewares } from './middlewares.js';

configureDependencies();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000; 

const router = configureMiddlewares(app);
configureRoutes(router); 
configureSwagger(router); 

router.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está aceptando conexiones en el puerto ${port}`);
});

 