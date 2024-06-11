import { Dependency } from "../../libs/dependency.js";

export class LoginService {
  constructor(){
    this.userService = Dependency.get('userService');
  }

  async login (data){
    if(!data?.username) {
      throw new MissingParameterError ('username');
    } 

    if(!data.password) {
      throw new MissingParameterError ('password');
    }

    const user = await this.userService.getForUsernameOrNull(data.username);
    if(!user) {
      throw new Error (`No existe el usuario: ${(data.username)}`);
    }

    if(!await this.userService.checkPassword (data.password, user.hashedPassword)) {
      throw new Error ('Contraseña incorrecta');
    }

    const jwt = 'Esta es la cadena de autorización' //esto

    return {
      authorizationToken: jwt //buscar esto
    }
  }
}
