import { asyncHandler } from '../../libs/async_handler.js';
import { UserController } from './user_controller.js';
 


export function configureUserRoutes(router) {
  router.get('/user', asyncHandler (UserController, 'get'));
  router.post('/user', asyncHandler (UserController, 'post'));
}