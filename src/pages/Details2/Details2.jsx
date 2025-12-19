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
import { UserContext } from "../../common/context/UserContext";
import { useContext, useState } from "react";


export default function Details2() {
  const navigate = useNavigate();
const { userData, updateUserData } = useContext(UserContext);
const [maritalStatus, setMaritalStatus] = useState(userData.maritalStatus || "");
const [spouseName, setSpouseName] = useState(userData.spouseName || "");


const handleNext = () => {
  if (!maritalStatus || (maritalStatus === "Married" && !spouseName.trim())) {
    alert("Please fill all required fields!");
    return;
  }
  updateUserData("maritalStatus", maritalStatus);
  updateUserData("spouseName", spouseName);
  if (maritalStatus === "Single") navigate("/goals");
  else navigate("/details3");
};

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar
          progress={50}
          heading="My details"
          value={2}
          displayProgress="flex"
          linkTo={"/details1"}
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
            My name is <span style={{ color: "#ff5100" }}>{userData.firstName}</span>
          </Typography>

          <Typography sx={{ mb: 4 }}>
            And I am <span style={{ color: "#ff5100" }}>{userData.title}</span> of {userData.dob} years old
            .
          </Typography>
          <Typography
            sx={{
              fontSize: "35px",
              textAlign: "left",
              color: "black",
              minWidth: "350px",
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
            <ToggleButton value="Single" sx={{ maxWidth:'150px' }}>
              <BoyIcon sx={{ mr: 1 }} />
              Single
            </ToggleButton>

            <ToggleButton
              value="Married"
              sx={{
                maxWidth:'150px' ,
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
              sx={{ width: "300px"}}
              InputProps={{
                startAdornment: <GirlIcon sx={{ mr: 1 }} />,
              }}
            />
          )}

          <div
            style={{
              width: "300px",
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
               onClick={handleNext}
            />
            <div></div>
          </div>
        </Box>
        <Footer />
      </div>
    </div>
  );
}
