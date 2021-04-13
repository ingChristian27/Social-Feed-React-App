import React from "react";
import { Box, Typography } from "../../../styles";
import { ContainerPost, Author, Date } from "./post.styles";

const Post = ({ post }) => {
    return (
        <Box>
            <ContainerPost>
                <Typography color="primary" fontStyle="ligth">
                    {post.text}
                </Typography>
                <Author>- {post?.user?.name}</Author>
            </ContainerPost>
            <Date>Posted: {post.created_at}</Date>
        </Box>
    );
};

export default Post;
