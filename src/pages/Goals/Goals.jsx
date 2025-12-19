import React from "react";
import Navbar from "../../common/components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";

export default function Goals() {
  return (
    <div>
      <Navbar
        progress={100}
        heading="My Goals"
        value={4}
        displayProgress="flex"
        linkTo="/details3"
        position={"fixed"}
        top={17}
      />

      <Box
        sx={{
          mt: "140px",
          ml:"100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          maxWidth:'450px'
        }}
      >
        <Typography
          sx={{
            fontSize: "35px",
            textAlign: "left",
            color: "black",
            minWidth: "350px",
            fontWeight: "600",
            lineHeight: 1,
            marginBottom: "35px",
            alignContent: "left",
            alignItems: "left",
          }}
        >
          What are your main goals in life?
        </Typography>
      </Box>
    </div>
  );
}
