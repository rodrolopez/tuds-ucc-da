import { configureLoginRoutes } from './components/login/routes.js';
import { configureUserRoutes } from './components/users/routes.js';

export function configureRoutes(router) {
  configureUserRoutes(router);
  configureLoginRoutes(router);
}