"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var routes_1 = require("routes");
var app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use(routes_1.default);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Servidor rodando na porta:' + port);
});
