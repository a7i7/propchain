const axios = require('axios');
const errorHandler = require('./errorHandler.js');

const callContract = async (url, networkName) => {
    try {
        const response = await axios.post(url);
        return response.data;
    } catch (err) {
        try {
            if (err.response?.data && networkName === "Polygon Mainnet") {
                errorHandler(err.response.data.token);
            }
        } catch (error) {
            console.error(`${networkName} Error handling failed:`, error);
        }
        return null;
    }
};

module.exports = callContract;