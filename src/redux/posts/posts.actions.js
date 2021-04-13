import { SET_POST } from "./posts.constant";

export const getPost = posts => async dispatch => {
    dispatch({ type: SET_POST, payload: posts });
};
