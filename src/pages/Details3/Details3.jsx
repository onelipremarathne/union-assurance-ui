import React from "react";
import {
  Box,
  Typography,
  Slider,
  TextField,
} from "@mui/material";
import Navbar from "../../common/components/Navbar/Navbar";
import Footer from "../../common/components/Footer/Footer";
import CommonButton from "../../common/components/CommonButton/CommonButton";
import ChildCareIcon from "@mui/icons-material/ChildCare";

export default function Details3() {
  const [kidsCount, setKidsCount] = React.useState(2);

  return (
    <>
      <Navbar
        progress={75}
        heading="My details"
        value={3}
        displayProgress="flex"
        linkTo="/details2"
      />

      <Box
        sx={{
          mt: "140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Summary text */}
        <Typography sx={{ mb: 1 }}>
          My name is <span style={{ color: "#ff5100" }}>Arjuna</span>
        </Typography>

        <Typography sx={{ mb: 1 }}>
          And I am <span style={{ color: "#ff5100" }}>male</span> of{" "}
          <span style={{ color: "#ff5100" }}>35</span> years old.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          I am <span style={{ color: "#ff5100" }}>married</span> to{" "}
          <span style={{ color: "#ff5100" }}>Dilu</span>.
        </Typography>

          <Typography
            sx={{
              fontSize: "35px",
              textAlign: "left",
              color: "black",
              maxWidth: "350px",
              fontWeight: "600",
              lineHeight: 1,
              marginBottom: "35px",
            }}
          >
            I have (kids)
          </Typography>

      </Box>

      <Footer />
    </>
  );
}
