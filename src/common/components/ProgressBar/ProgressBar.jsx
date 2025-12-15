import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProgressBar({ progress,heading,value ,displayProgress}) {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignContent:'center',
          alignItems:'center',
          borderRadius:'50px',
          width:'350px',
          padding:'5px 20px',
          boxShadow: "0px 3px 15px rgba(0,0,0,0.15)",
          display: displayProgress ? "flex" : "none",

          

        }}
      >
        <ArrowBackIcon sx={{ color: "black" }} />
        <Typography sx={{ color: "black" }}>{heading}</Typography>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            size={55}
            thickness={8}
            enableTrackSlot
            sx={{ color: "rgb(255, 81, 0)" }}
            variant="determinate"
            value={progress}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{
                color: "text.secondary",
                fontSize: "8px",
                textAlign: "center",
              }}
            >
              Step <br /> {value} of 3
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
