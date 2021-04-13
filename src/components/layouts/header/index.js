import React from "react";
import { Grid, Box, Row, Typography } from "../../../styles/";
import { ButtonPromotion } from "../../commons/";

const Header = () => {
  return (
    <Row reverse={true}>
      <Grid lg={6} xs={12}>
        <Box backgroundImage={"assets/imgs/background_header.jpg"}>
          B
        </Box>
      </Grid>
      <Grid lg={6} xs={12}>
        <Box background="primary" p={60} pt={40} pb={80}>
          <img src={"assets/imgs/logo.png"} alt="tidal" />
          <Typography variant="h6" color="secundary" >
            Attention Online Advertisers
          </Typography>
          <Typography color="secundary" fontStyle="bold">
            What’s Your <br />
            Online Advertising
            <br />
            Readiness Rating?
          </Typography>
          <Typography fontStyle="light" color="secundary">
            When you take this quiz, you’ll get a free report that outlines YOUR
            Readiness Rating.
          </Typography>
          <ButtonPromotion />
          <Typography variant="h6" color="secundary">
            Learn more about Readiness Raitings
          </Typography>
        </Box>
      </Grid>
    </Row>
  );
};

export default Header;
