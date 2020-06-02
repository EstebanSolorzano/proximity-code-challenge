"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../api/carsInfo/router");
function routes(app) {
    app.use('/api/v1/cars', router_1.default);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map