const ApiRequestService = require("../services/ApiRequestService");


class MonitorJob {
    static async run() {
        console.log("Monitoring APIs...")

        // exemplos de API
        const apis = [
            // { url: " https://jsonplaceholder.typicode.com/posts", method: "GET" },
            // { url: " https://reqres.in/api/users", method: "GET" },
            { url: "https://api.github.com/users/PauloFeresin", method: "GET" },
            { url: "https://api-ext.smarters.io/apis/run/google-sheets-get-data", method: "POST", payload: {spreadsheetID: "1S3fVvFbcb-cM5m_DXMqlWjLq0Eu1BMCK0aVSwTHWbaY", sheet: "items"} },
        ];

        for (const api of apis) {
            const result = await ApiRequestService.request(api);

            console.log(`Monitoring of API ${api.url}`);
            console.log(result);
        }

    }
}


module.exports = MonitorJob