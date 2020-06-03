export class ClientConfiguration {
    private configurations = {
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
    }
    getConfiguration(clientName) {
        return this.configurations[clientName];
    }
}


export default new ClientConfiguration();