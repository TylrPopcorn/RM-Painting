import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="Home">
      <div className="content container-fluid WRAPPER">
        <a className="navbar-brand" href="#Home">
          <div className="logo-img"></div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#AboutUs">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#ContactUs">
                Contact
              </a>
            </li>
          </ul>
          <div className="socials">
            <a
              href="https://www.facebook.com/people/RM-Painting-Construction-Service/61556730664367/"
              rel="noopener noreferrer"
              className="icon fb"
              aria-label="Facebook"
            ></a>
            <a
              className="icon yt"
              href="https://www.youtube.com/@rmpaintingconstructionservice?utm_source=facebook&utm_medium=confirmed_link_feature&themeRefresh=1"
              rel="noopener noreferrer"
              aria-label="Youtube"
            ></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
