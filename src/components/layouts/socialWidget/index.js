import React, { useEffect, useState } from "react";
import { Grid, Box, Row } from "../../../styles";
import { Post } from "../../commons/";
import * as service from "../../../services";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../../redux/posts/posts.actions";

const SocialWidget = ({ cantPostDisplay = 3, updateInterval = null }) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        cronJob(cantPostDisplay, updateInterval);
    }, []);

    const cronJob = async (cantPostDisplay = 3, updateInterval = null) => {
        const newPosts = await getPosts(cantPostDisplay, updateInterval);
        const lastIdPost = newPosts[newPosts.length - 1].id_str;

        dispatch(getPost(newPosts));
        setTimeout(() => {
            //cronJob(cantPostDisplay, lastIdPost);
        }, 5000);
    };

    const getPosts = async (cantPostDisplay, updateInterval) => {
        try {
            return await service.getPost(cantPostDisplay, updateInterval);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Row justify={"center"}>
            <Grid lg={12} xs={12}>
                <Box background="primary" p={50} mt={50}>
                    <MapPost posts={posts} />
                </Box>
            </Grid>
        </Row>
    );
};

export default SocialWidget;

const MapPost = ({ posts }) => posts.map(post => <Post key={post.id} post={post} />);
