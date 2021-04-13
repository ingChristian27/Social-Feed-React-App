import React from "react";
import { Grid, Row, Typography } from "../../../styles/";
import ContainerFooter from "./footer.style";

const Footer = () => {
    return (
        <ContainerFooter>
            <Row>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
            </Row>
        </ContainerFooter>
    );
};

export default Footer;
