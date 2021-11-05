"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(), config = require("config"), router = require('./router'), HOST = config.get("HOST"), PORT = config.get("PORT") || 5000, cors = require("cors");
app.use(express_1.default.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server has been started on ${HOST}:${PORT}`);
});
