"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const middleware_1 = require("../middleware/middleware");
const app = express();
class ExpressServer {
    constructor() {
        middleware_1.middleware.bodyParser(app);
    }
    router(routes) {
        app.enable('case sensitive routing');
        routes(app);
        return this;
    }
    listen(port = 8080) {
        const welcome = wport => {
            return () => {
                return console.log(`up and running in on port: ${wport}}`);
            };
        };
        app.listen(port, welcome(port));
        return app;
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=server.js.map