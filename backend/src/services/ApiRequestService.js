const axios = require("axios");


class ApiRequestService {
    static async request(api) {
        const { url, method = "GET", payload = {} } = api;

        try {
            const start = Date.now();
            const response = await axios({
                method,
                url,
                data: payload,
                timeout: 5000
            });
            const time  = Date.now() - start;

            return {
                success: true,
                method,
                status: response.status,
                responseTime: time,
                data: response.data,
            };
        } catch (error) {
            return {
                success: false,
                method,
                status: error.response?.status || 500,
                responseTime: null,
                error: error.message
            }
        }
    }
}


module.exports = ApiRequestService