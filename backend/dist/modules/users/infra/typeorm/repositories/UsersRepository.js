"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
class UsersRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(User_1.default);
    }
    async create(rawUser) {
        const user = this.ormRepository.create({
            name: rawUser.name,
            email: rawUser.email
        });
        await this.ormRepository.save(user);
        return user;
    }
    async findUser(email) {
        const user = this.ormRepository.findOne({
            where: { email }
        });
        return user;
    }
    async remove(email) {
        const user = this.ormRepository.findOneOrFail({
            where: { email }
        });
        this.ormRepository.delete((await user).id);
    }
}
exports.default = UsersRepository;
