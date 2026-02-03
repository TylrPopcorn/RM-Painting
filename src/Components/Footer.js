//FOOTER RELATED
import React from "react";

//FOOTER
export default function Footer() {
  //
  //

  //--------
  return (
    <footer>
      <div className="WRAPPER">
        <div className="content row">
          <div className="section sctn1 col">
            <div className="logo"></div>
            <div className="socials">
              <a
                href="https://www.youtube.com/@rmpaintingconstructionservice?utm_source=facebook&utm_medium=confirmed_link_feature&themeRefresh=1"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="social yt"
              ></a>
              <a
                href="https://www.facebook.com/people/RM-Painting-Construction-Service/61556730664367/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social fb"
              ></a>
            </div>
            <p className="copyright">
              {" "}
              © {new Date().getFullYear()} R&M Painting All rights reserved.
            </p>
          </div>
          {/*----*/}
          <div className="section sctn2 col">
            <h3 className="header">Company</h3>
            <div className="content">
              <a href="#Home" className="link">
                Home
              </a>
              <a href="#About" className="link">
                About
              </a>
              <a href="#Gallery" className="link">
                Gallery
              </a>
              <a href="#Process" className="link">
                Process
              </a>
              <a href="#ContactUs" className="link">
                Contact Us
              </a>
            </div>
          </div>
          {/*----*/}
          <div className="section sctn3 col">
            <h3 className="header">Contact</h3>
            <div className="content lessgap">
              <p className="link">
                {" "}
                <a href="tel:">(903) 239-2108</a>
              </p>
              <p className="link">
                <a href="mailto:">Email</a>
              </p>
              <p className="link">
                491 FM555, Gilmer, TX, United States, Texas
              </p>
            </div>
          </div>
          {/*----*/}
        </div>
      </div>
    </footer>
  );
}
