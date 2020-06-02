"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientConfiguration = void 0;
class ClientConfiguration {
    constructor() {
        this.configurations = {
            client1: {
                excludedFields: [],
                delimiter: "|"
            },
            client2: {
                excludedFields: [],
                delimiter: "|"
            },
            client3: {
                excludedFields: ["Company Name", "Owner Name"],
                delimiter: "$"
            }
        };
    }
    getConfiguration(clientName) {
        return this.configurations[clientName];
    }
}
exports.ClientConfiguration = ClientConfiguration;
exports.default = new ClientConfiguration();
//# sourceMappingURL=clientConfiguration.js.map