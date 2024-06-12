import { Dependency } from "../../libs/dependency.js";
import { MissingParameterError } from "../../libs/missing_parameter_error.js";
import { UnauthorizedError } from "../../libs/unauthorized_error.js";
import jwt from 'jsonwebtoken';

export class LoginService {
  constructor() {
    this.userService = Dependency.get('userService');
    this.conf = Dependency.get('conf');
  }

  async login(data) {
    if (!data?.username) {
      throw new MissingParameterError('username');
    }

    if (!data.password) {
      throw new MissingParameterError('password');
    }
    const user = await this.userService.getForUsernameOrNull(data.username);
    if (!user) {
      throw new UnauthorizedError(`No existe el usuario: ${(data.username)}`);
    }

    if (!await this.userService.checkPassword(data.password, user.hashedPassword)) {
      throw new UnauthorizedError('Contraseña incorrecta');
    }
    const payload = {
      username: user.username,
      displayName: user.displayName,
      userUuid: user.uuid
    }
    const token = jwt.sign(payload, this.conf.jwtPassword); //meter la contraseña

    return {
      authorizationToken: token //buscar esto jwt
    }
  }
}
