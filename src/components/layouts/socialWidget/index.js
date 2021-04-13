import React, { useEffect, useState } from "react";
import { Grid, Box, Row } from "../../../styles";
import { Post } from "../../commons/";
import * as service from "../../../services";

const SocialWidget = ({ cantPostDisplay = 5, updateInterval = null }) => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await service.getPost(cantPostDisplay, updateInterval);
                console.log(response);
                setPost(response);
            } catch (error) {
                console.error(error);
            }
        };

        getPost();
    }, [cantPostDisplay, updateInterval]);

    return (
        <Row justify={"center"}>
            <Grid lg={10} xs={10}>
                <Box background="primary" p={50}>
                    <MapPost posts={posts} />
                </Box>
            </Grid>
        </Row>
    );
};

export default SocialWidget;

const MapPost = ({ posts }) => posts.map(post => <Post key={post.id} post={post} />);
