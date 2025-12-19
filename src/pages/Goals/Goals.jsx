import React from "react";
import Navbar from "../../common/components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import CommonButton from "../../common/components/CommonButton/CommonButton";
import Cards from "../../common/components/Cards/Cards";
import Artwork1 from "../../assets/Artwork1.png";
import Artwork2 from "../../assets/Artwork2.png";
import Artwork3 from "../../assets/Artwork3.png";
import Artwork4 from "../../assets/Artwork4.png";
import Artwork5 from "../../assets/Artwork5.png";
import Artwork6 from "../../assets/Artwork6.png";
import Artwork7 from "../../assets/Artwork7.png";
import Footer from "../../common/components/Footer/Footer";

export default function Goals() {
  const goals = [Artwork1, Artwork2, Artwork3, Artwork4, Artwork5, Artwork6, Artwork7 ];

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
            color: "black",
            minWidth: "350px",
            fontWeight: "600",
            lineHeight: 1,
          }}
        >
          What are your main goals in life?
        </Typography>

        <div style={{display:'flex',justifyContent: "space-between", width: "90vw"}}>
            <div style={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                <CommonButton btnName={"All Goals"} displayButton={true} borderColor={'rgba(212, 212, 212, 1)'} bgColor={'rgba(212, 212, 212, 1)'} textColor={'black'}/>            
                <CommonButton btnName={"Goal Timeline"} displayButton={true} borderColor={'rgba(212, 212, 212, 1)'} bgColor={'rgba(255, 255, 255, 1)'} textColor={'rgba(173, 172, 172, 1)'}/>                       
            </div >
            <div>
                <CommonButton btnName={"+ Add to cart "} displayButton={true}borderColor={'rgb(255, 81, 0)'} bgColor={'white'} textColor={'rgb(255, 81, 0)'} />                               
            </div>
        </div>

        <div style={{display:'flex', width:'90vw', flexWrap:'wrap', justifyContent:'space-between'}}>
            {goals.map((img, index) => (
                <Cards key={index} image={img} />
                ))}

        </div>

            <div style={{display:'flex', justifyContent:'flex-end', width:'90vw'}}>
                <CommonButton btnName={"Next →"} displayButton={true} borderColor={'rgb(255, 81, 0)'} bgColor={'rgb(255, 81, 0)'} textColor={'white'} onClick={()=>{navigate("/landing1 ")}} />        
            </div> 
      </Box>

        <div style={{marginTop:'100px',marginBottom:'50px'}}>
            <Footer/>
        </div>

    </div>
  );
}
