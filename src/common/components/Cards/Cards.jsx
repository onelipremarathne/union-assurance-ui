import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function Cards(props) {
  return (
    <Card sx={{ width: 400, marginBottom:'40px'}}>
      
        <CardMedia
          component="img"
          image= {props.image}
          alt="Artwork"
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
        />
    
    </Card>
  );
}
