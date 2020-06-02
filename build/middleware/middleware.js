"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const bodyParser = require("body-parser");
exports.middleware = {
    bodyParser: app => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    },
};
//# sourceMappingURL=middleware.js.map