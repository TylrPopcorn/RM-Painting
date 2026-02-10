//GALLERY SECTION RELATED
import React from "react";

//GALLERY
export default function Gallery() {
  //----vars:

  return (
    <div className="Gallery-Section" id="Gallery">
      <div className="WRAPPER">
        <div className="content">
          <div className="Header">
            <div className="cirBox">
              <div className="cir left"></div>
              <div className="cir right"></div>
              <div className="cir right2"></div>
              <div className="cir left2"></div>
            </div>
            <h1 className="header-title">Our Recent Projects</h1>
            <p className="header-sub">
              A look at some of our favorite painting, remodeling, and
              construction work
            </p>
          </div>
          <div className="gallery">
            <div className="img img1"></div>
            <div className="img img2"></div>
            <div className="img img3"></div>
            {/**------*/}
            <div className="img img4"></div>
            <div className="img img5"></div>
            <div className="img img6"></div>
            {/**------*/}
            <div className="img img7"></div>
            <div className="img img8"></div>
            <div className="img img9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
