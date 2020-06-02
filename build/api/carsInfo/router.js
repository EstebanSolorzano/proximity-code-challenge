"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = require("./controller");
exports.default = express
    .Router()
    .post('/processCarInfoFromCSV', controller_1.default.processCarInfoFromCSV);
//# sourceMappingURL=router.js.map