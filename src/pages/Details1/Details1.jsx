import React from "react";
import Navbar from "../../common/components/Navbar/Navbar";
import Footer from "../../common/components/Footer/Footer";
import { Box, Typography, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import CommonButton from "../../common/components/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/context/UserContext";
import { useContext, useState } from "react";

export default function Details1() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);

  const [title, setTitle] = useState(userData.title);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [dob, setDob] = useState(userData.dob);

  const handleNext = () => {
    if (!title || !firstName || !lastName || !dob) {
      alert("Please fill all fields!");
      return;
    }
    updateUserData("title", title);
    updateUserData("firstName", firstName);
    updateUserData("lastName", lastName);
    updateUserData("dob", dob);
    navigate("/details2");
  };

  let displayValue;
  if (dob) {
    displayValue = (2025 - dob).toString(); 
  } else {
    displayValue = "";
  }

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar
          progress={25}
          heading="My details"
          value={1}
          displayProgress="flex"
          linkTo={"/landing1"}
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
            Let's get started by telling a little bit about yourself
          </Typography>

          <div>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="large">
              <InputLabel>Title</InputLabel>

              <Select value={title} onChange={(e) => setTitle(e.target.value)}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{ m: 1, maxWidth: 200 }}
              label="First name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <TextField
            sx={{ m: 1, minWidth: 290 }}
            label="Last name"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            sx={{ m: 1, minWidth: 290 }}
            id="outlined-basic"
            label="My date of birth"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
            value={displayValue}
            onChange={(e) => {
              if (e.target.value) {
                const year = new Date(e.target.value).getFullYear();
                const age = 2025 - year;
                setDob(age);
              }
            }}
          />

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
              onClick={handleNext}
            />
          </div>
        </Box>
        <Footer />
      </div>
    </div>
  );
}
