"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userRouter = express_1.Router();
const userController = new UserController_1.default();
userRouter.post('/', userController.create);
userRouter.get('/', userController.getUser);
userRouter.get('/login/', userController.getUserForLogin);
userRouter.delete('/', userController.remove);
exports.default = userRouter;
