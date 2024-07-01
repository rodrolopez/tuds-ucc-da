import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
import { configureMiddlewares } from './middlewares.js';

configureDependencies();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000; // Definir el puerto

const router = configureMiddlewares(app); // Configurar middlewares en app
configureRoutes(router); // Configurar rutas en router
configureSwagger(router); // Configurar Swagger en router

router.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está aceptando conexiones en el puerto ${port}`);
});

 