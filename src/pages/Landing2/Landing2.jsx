import React from 'react'
import Navbar from "../../common/components/Navbar/Navbar";
import InfoCard from "../../common/components/InfoCard/InfoCard";
import SecImg from "../../assets/SecImg.png";
import Footer from "../../common/components/Footer/Footer";
import details1 from '../Details1/Details1';

export default function Landing2() {
  return (
    <div>
      <div style={{ position: "relative", height: "95vh" }}>
        <Navbar whichPage={'/details1'} />
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div style={{ position: "absolute", top: "30%", left: "7%" }}>
            <InfoCard />
          </div>
          <img
            style={{ position: "absolute", top: "15%", right: "0%", width: "38vw", zIndex:1201 }}
            src={SecImg}
          ></img>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
