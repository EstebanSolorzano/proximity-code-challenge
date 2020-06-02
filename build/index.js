"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./common/server");
const routes_1 = require("./common/routes");
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://esteban:Estsolba@cluster0-y7xkj.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.default = new server_1.default().router(routes_1.default).listen(8080);
//# sourceMappingURL=index.js.map