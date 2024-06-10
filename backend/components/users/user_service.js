import { Dependency } from "../../libs/dependency.js";
import { MissingParameterError } from "../../libs/missing_parameter_error.js";
import { ConflictError } from "../../libs/conflict_error.js";
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';

export class UserService{
    constructor(){
        this.userData = Dependency.get('userData');
      }

    async getList(filters, options) {
        return this.userData.getList(filters, options);
    }

    async getSingleOrNull (filters){
        const userList = await this.userData.getList(filters);
        if (userList.length){
            return userList[0];
        }
        return null;
    }

    async getForUsernameOrNull(username){
        return this.getSingleOrNull({username});
    }

    async getForUuidOrNull(uuid){
        return this.getSingleOrNull({uuid});
    }


    async hashPassword(password){
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }

    async checkPassword (password, hash) {
        return bcrypt.compare(password, hash);
    }


    async create(data) {
        if(!data?.username) {
            throw new MissingParameterError ('username');
        }

        if(!data.displayName) {
            throw new MissingParameterError ('displayName');
        }

        if(!data.password) {
            throw new MissingParameterError ('password');
        }

        if (await this.getForUsernameOrNull(data.username)) {
            throw new ConflictError ('Username already exists');
        }

        data.uuid = uuid.v4();

        data.hashedPassword = await this.hashPassword (data.password);
        delete data.password;

        this.userData.create(data);
    }
}

