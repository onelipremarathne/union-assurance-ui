import React from "react";
import Navbar from "../../common/components/Navbar/Navbar";
import InfoCard from "../../common/components/InfoCard/InfoCard";
import FirstImg from "../../assets/FirstImg.png";
import Footer from "../../common/components/Footer/Footer";

export default function Landing1() {
  return (
    <div>
      <div style={{ position: "relative", height: "95vh" }}>
        <Navbar progress={30}  heading='hi' value={1} displayProgress='flex' />

          <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div style={{ position: "absolute", top: "30%", left: "7%" }}>
            <InfoCard />
          </div>
          <img
            style={{ position: "absolute", top: "15%", right: "0%", width: "38vw", zIndex:1201 }}
            src={FirstImg}
          ></img>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
