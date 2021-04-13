import React from "react";
import { Grid, Box, Row, Typography } from "../../../styles/";
import { ButtonPromotion } from "../../commons/";
import { ContainerBtn } from "./startSections.style";

const StartSection = () => {
  return (
    <Row>
      <Grid lg={12} xs={12}>
        <Box background="primary" p={40}>
          <Typography color="secundary" fontStyle="bold">
            Find Out YOUR Online Advertising Readiness Rating!
          </Typography>
        </Box>

        <ContainerBtn>
          <ButtonPromotion />
        </ContainerBtn>
      </Grid>
    </Row>
  );
};

export default StartSection;
