import { CANT_POST_TO_DISPLAY, URL } from "../constants";
import axios from "axios";

let lastPostId = null;

export const processPost = async () => {
    const posts = await getPost();
    lastPostId = posts[posts.length - 1].id_str;
    return posts;
};

const getPost = async () => {
    try {
        const response = await axios.get(`${URL}?limit=${CANT_POST_TO_DISPLAY};&start_id=${lastPostId}`);
        return adapterPost(response.data);
    } catch (error) {
        throw error;
    }
};

const adapterPost = posts =>
    posts.map(post => {
        return { name: post?.user?.name, text: post.text, created_at: post.created_at, id: post.id, id_str: post.id_str };
    });
