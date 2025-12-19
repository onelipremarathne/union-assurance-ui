import React from "react";
import Navbar from "../../common/components/Navbar/Navbar";
import Footer from "../../common/components/Footer/Footer";
import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CommonButton from "../../common/components/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";
import BoyIcon from "@mui/icons-material/Boy";
import GirlIcon from '@mui/icons-material/Girl';
import WcIcon from "@mui/icons-material/Wc";

export default function Details2() {
  const navigate = useNavigate();
  const name = "Arjuna";
  const gender = "male";
  const age = 35;

  const [maritalStatus, setMaritalStatus] = React.useState("");
  const [spouseName, setSpouseName] = React.useState("");

  const isValid =
    maritalStatus && (maritalStatus === "Single" || spouseName.trim() !== "");
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar
          progress={60}
          heading="My details"
          value={2}
          displayProgress="flex"
          linkTo={"/Landing1"}
          position={"fixed"}
          top={17}
        />

        <Box
          sx={{
            marginTop: "130px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ mb: 1 }}>
            My name is <span style={{ color: "#ff5100" }}>{name}</span>
          </Typography>

          <Typography sx={{ mb: 4 }}>
            And I am{" "}
            <span style={{ color: "#ff5100" }}>
              {gender} of {age} years old
            </span>
            .
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
            Are you married?
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>Marital Status</Typography>

          <ToggleButtonGroup
            exclusive
            value={maritalStatus}
            onChange={(_, value) => setMaritalStatus(value)}
          >
            <ToggleButton value="Single" sx={{ px: 3 }}>
              <BoyIcon sx={{ mr: 1 }} />
              Single
            </ToggleButton>

            <ToggleButton
              value="Married"
              sx={{
                px: 3,
                "&.Mui-selected": {
                  backgroundColor: "#ff5100",
                  color: "#fff",
                },
              }}
            >
              <WcIcon sx={{ mr: 1 }} />
              Married
            </ToggleButton>
          </ToggleButtonGroup>

          {maritalStatus === "Married" && (
            <TextField
              label="My wife is"
              value={spouseName}
              onChange={(e) => setSpouseName(e.target.value)}
              sx={{ width: "280px", mb: 4 }}
              InputProps={{
                startAdornment: <GirlIcon sx={{ mr: 1 }} />,
              }}
            />
          )}

          <div
            style={{
              width: "290px",
              display: "flex",
              justifyContent: "flex-end",
              margin: "8px",
              marginTop: "20px",
            }}
          >
            <CommonButton
              alignContent={"right"}
              btnName={"Next →"}
              displayButton={"flex"}
              borderColor={"rgb(255, 81, 0)"}
              bgColor={"rgb(255, 81, 0)"}
              textColor={"white"}
              onClick={() => {
                navigate("/details2");
              }}
            />

            <div></div>
          </div>
        </Box>
        <Footer />
      </div>
    </div>
  );
}
