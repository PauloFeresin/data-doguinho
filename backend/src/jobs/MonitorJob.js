const ApiRequestService = require("../services/ApiRequestService");


class MonitorJob {
    static async run() {
        console.log("Monitoring APIs...");

        const apis = [
            { url: "https://reqres.in/api/users", method: "GET", repeat: 5 },
        ];

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        for (const api of apis) {
            for (let i = 0; i < api.repeat; i++) {
                const result = await ApiRequestService.request(api);

                console.log(`Monitoring of API ${api.url} - Requisição ${i + 1}`);
                console.log(result);

                await delay(2000);
            }
        }
    }
}

module.exports = MonitorJob;