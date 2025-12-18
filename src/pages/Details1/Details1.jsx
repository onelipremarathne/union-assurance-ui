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

export default function Details1() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar
          progress={30}
          heading="My details"
          value={1}
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
            alignContent:'center',
            
            
            flexDirection: "column",
          }}
        >
          <Typography sx={{fontSize:'35px' ,textAlign: "left", color: "black", maxWidth:'350px',fontWeight:'600', lineHeight:1, marginBottom:'35px'}}>
            Let's get started by telling a little bit about yourself
          </Typography>

          <div>
            <FormControl sx={{ m: 1, minWidth: 70 }} size="large">
              <InputLabel>Title</InputLabel>

              <Select value={age} onChange={handleChange} autoWidth>
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{ m: 1, maxWidth: 200 }}
              id="outlined-basic"
              label="First name"
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
            />
          </div>

          <TextField
            sx={{ m: 1, minWidth: 290 }}
            id="outlined-basic"
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
          />

          <TextField
            sx={{ m: 1, minWidth: 290 }}
            id="outlined-basic"
            label="My date of birth"
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
              onClick={() => {
                navigate("/Landing2");
              }}
            />
          </div>
        </Box>
        <Footer/>
      </div>
    </div>
  );
}
