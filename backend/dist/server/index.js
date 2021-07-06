"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../shared/infra/http/routes/index"));
require("reflect-metadata");
const Error_1 = __importDefault(require("@shared/errors/Error"));
require("express-async-errors");
require("@shared/container");
require("@shared/infra/typeorm");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(index_1.default);
app.use((err, request, response, next) => {
    if (err instanceof Error_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.get('/', (req, res) => {
    return res.json({ Ping: 'Pong' });
});
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
exports.default = app;
