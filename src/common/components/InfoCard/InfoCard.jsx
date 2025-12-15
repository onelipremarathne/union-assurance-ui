import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './styles.css'
import CommonButton from "../CommonButton/CommonButton";
import Landing2 from "../../../pages/Landing2/Landing2";
import { useNavigate } from "react-router-dom";



export default function InfoCard() {

    const navigate = useNavigate();
  return (
    <div>
      <Box sx={{maxWidth: 500}}>
        <Typography variant="h2" sx={{color:'black', fontWeight:600}} gutterBottom>
          Life Insurance Made Simple
        </Typography>
        <Typography variant="h6" sx={{color:'grey'}} gutterBottom>
          Find your goals and plan your future{" "}
        </Typography>
        <CommonButton btnName={"Get started →"} borderColor={'rgb(255, 81, 0)'} bgColor={'rgb(255, 81, 0)'} textColor={'white'} onClick={()=>{navigate("/Landing2")}} />        
      </Box>
    </div>
  );
}
