import React from "react";
import { Box, Typography, Slider, TextField } from "@mui/material";
import Navbar from "../../common/components/Navbar/Navbar";
import Footer from "../../common/components/Footer/Footer";
import CommonButton from "../../common/components/CommonButton/CommonButton";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/context/UserContext";
import { useContext, useState, useEffect } from "react";

export default function Details3() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);
  const [kidsCount, setKidsCount] = useState(userData.kids?.length || 0);
  const [kids, setKids] = useState(userData.kids?.length ? userData.kids : []);

  // Ensure kids array matches kidsCount
  useEffect(() => {
    setKids((prev) => {
      const updated = [...prev];
      if (kidsCount > updated.length) {
        for (let i = updated.length; i < kidsCount; i++) {
          updated.push({ name: "", age: "" });
        }
      } else {
        updated.length = kidsCount;
      }
      return updated;
    });
  }, [kidsCount]);

  const handleKidsChange = (value) => {
    setKidsCount(value);
  };

  const updateKid = (index, field, value) => {
    const updated = [...kids];
    updated[index][field] = value;
    setKids(updated);
  };

  const handleNext = () => {
    const allFilled = kids.every((k) => k.name && k.age);
    if (!allFilled && kidsCount > 0) {
      alert("Please fill all kids info!");
      return;
    }
    updateUserData("kids", kids);
    navigate("/goals");
  };

  return (
    <>
      <Navbar
        progress={75}
        heading="My details"
        value={3}
        displayProgress="flex"
        linkTo="/details2"
        position={"fixed"}
        top={17}
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
          My name is{" "}
          <span style={{ color: "#ff5100" }}>{userData.firstName}</span>
        </Typography>

        <Typography sx={{ mb: 1 }}>
          And I am <span style={{ color: "#ff5100" }}>{userData.title}</span> of{" "}
          <span style={{ color: "#ff5100" }}>{userData.dob}</span> years old.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          I am{" "}
          <span style={{ color: "#ff5100" }}>{userData.maritalStatus}</span>
          {userData.maritalStatus === "Married" && (
            <>
              {" "}
              to <span style={{ color: "#ff5100" }}>{userData.spouseName}{"."}</span>
            </>
          )}
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
            alignContent: "left",
            alignItems: "left",
          }}
        >
          I have (kids)
        </Typography>

        <Slider
          value={kidsCount}
          min={0}
          max={10}
          step={1}
          valueLabelDisplay="on"
          onChange={(_, value) => handleKidsChange(value)}
          sx={{ width: 260, color: "#ff5100", mb: 4 }}
        />

        <Typography sx={{ color: "grey", mb: 2, fontWeight: 600, mt: -2 }}>
          they are
        </Typography>

        {/* Kids fields */}
        {kids.map((kid, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <TextField
              label="My kid is"
              value={kid.name}
              onChange={(e) => updateKid(index, "name", e.target.value)}
              InputProps={{
                startAdornment: <AccessibilityNewIcon sx={{ mr: 1 }} />,
              }}
            />

            <TextField
              sx={{ maxWidth: "150px" }}
              label="he/she is"
              type="number"
              value={kid.age}
              onChange={(e) => updateKid(index, "age", e.target.value)}
              InputProps={{
                endAdornment: (
                  <Typography
                    sx={{
                      fontSize: 12,
                      ml: 1,
                      backgroundColor: "lightgrey",
                      minWidth: "50px",
                      padding: "3px",
                      borderRadius: "7px",
                      color: "white",
                    }}
                  >
                    years old
                  </Typography>
                ),
              }}
            />
          </Box>
        ))}

        <Box sx={{ mt: 4 }}>
          <CommonButton
            btnName="Next →"
            bgColor="rgb(255, 81, 0)"
            textColor="white"
            borderColor="rgb(255, 81, 0)"
            displayButton
            onClick={handleNext}
          />
        </Box>
      </Box>
      <div style={{ marginTop: kidsCount === 0 ? "102px" : "auto",marginBottom: kidsCount === 0 ? "auto" : "35px" }}>
        <Footer />
      </div>
    </>
  );
}
