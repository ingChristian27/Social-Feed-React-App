const axios = require("axios");

export const getPost = async (cantPostDisplay, updateInterval) => {
    try {
        const response = await axios.get(`http://api.massrelevance.com/MassRelDemo/kindle.json?limit=${cantPostDisplay};&start_id=${updateInterval}`);

        return response.data;
    } catch (error) {
        throw error;
    }
};
