import React from 'react'
import Navbar from "../../common/components/Navbar/Navbar";
import Footer from "../../common/components/Footer/Footer";


export default function Details1() {
  return (
    <div>
      <div style={{ position: "relative", height: "95vh" }}>
        <Navbar progress={30}  heading='My details' value={1} displayProgress='flex' linkTo={'/Landing1'} position={'fixed'} top={17}/>
        <Footer/>
      </div>
    </div>
  )
}
