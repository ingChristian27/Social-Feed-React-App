const axios = require("axios");

export const getPost = async (cantPostDisplay, updateInterval) => {
    try {
        const response = await axios.get(`http://api.massrelevance.com/MassRelDemo/kindle.json?limit=${cantPostDisplay};&start_id=${updateInterval}`);
        return adapterPost(response.data);
    } catch (error) {
        throw error;
    }
};

const adapterPost = posts =>
    posts.map(post => {
        return { name: post?.user?.name, text: post.text, created_at: post.created_at, id: post.id, id_str: post.id_str };
    });
