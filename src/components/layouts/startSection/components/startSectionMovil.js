import React from "react";
import { Grid, Box, Row, Typography } from "../../../../styles";
import { ButtonPromotion } from "../../../commons";
import { ContainerBtn, Banner } from "../startSections.style";

const StartSectionMovil = () => {
    return (
        <Row>
            <Grid lg={12} xs={12}>
                <Banner>
                    <Typography color="secundary" fontStyle="startSection">
                        Find Out YOUR Online Advertising Readiness Rating!
                    </Typography>
                    <ButtonPromotion />
                </Banner>
            </Grid>
        </Row>
    );
};

export default StartSectionMovil;
