"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateUserService_1 = __importDefault(require("@modules/users/services/CreateUserService"));
const FindUserService_1 = __importDefault(require("@modules/users/services/FindUserService"));
const RemoveUserService_1 = __importDefault(require("@modules/users/services/RemoveUserService"));
class UserController {
    async create(request, response) {
        const { name, email } = request.body;
        const createUser = tsyringe_1.container.resolve(CreateUserService_1.default);
        await createUser.execute({ name, email });
        return response.json({ created: true }).status(201);
    }
    async getUserForLogin(request, response) {
        const { name, email } = request.query ? request.query : request.body;
        const findUser = tsyringe_1.container.resolve(FindUserService_1.default);
        let user = await findUser.execute(email);
        if (user == undefined) {
            user = await tsyringe_1.container.resolve(CreateUserService_1.default).execute({ name, email });
        }
        return response.json({ name: user.name, email: user.email }).status(201);
    }
    async getUser(request, response) {
        const findUser = tsyringe_1.container.resolve(FindUserService_1.default);
        let user = await findUser.execute(request.body.email);
        if (user == undefined) {
            return response.status(404).send("User not found");
        }
        return response.json({ name: user.name, email: user.email }).status(201);
    }
    async remove(request, response) {
        let user = await tsyringe_1.container.resolve(FindUserService_1.default).execute(request.body.email);
        if (user == undefined) {
            return response.status(404).send("User not found");
        }
        const removeUser = tsyringe_1.container.resolve(RemoveUserService_1.default);
        await removeUser.execute(request.body.email);
        return response.json({ success: true }).status(201);
    }
}
exports.default = UserController;
