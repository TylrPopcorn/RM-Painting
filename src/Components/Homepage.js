//HOMEPAGE RELATED
import React from "react";

//Components:
import Navbar from "./Navbar";
import HeroSection from "./partials/hero";
import Services from "./partials/services";
import AboutUs from "./partials/aboutUs";
import Materials from "./partials/materials";
import Gallery from "./partials/gallery";
import Process from "./partials/process";
import Craftmanship from "./partials/craftmanship";
import Mission from "./partials/mission";
import CTA from "./partials/cta";
import ContactUs from "./partials/contactUs";
import Footer from "./Footer";

//HOMEPAGE
export default function Homepage() {
  //----vars:

  return (
    <div className="Homepage" id="Home">
      <Navbar />
      {/**----HERO SECTION----*/}
      <HeroSection />
      {/**----SERVICES SECTION----*/}
      <Services />
      {/**---ABOUT US SECTION----*/}
      <AboutUs />
      {/**---MATERIALS SECTION----*/}
      <Materials />
      {/**---GALLERY SECTION----*/}
      <Gallery />
      {/**---PROCESS SECTION----*/}
      <Process />
      {/**---CRAFTMANSHIP SECTION----*/}
      <Craftmanship />
      {/**---MISSION SECTION----*/}
      <Mission />
      {/**---CTA SECTION----*/}
      <CTA />
      {/**---CONTACT US SECTION----*/}
      <ContactUs />
      {/**-----FOOTER-----*/}
      <Footer />
    </div>
  );
}
