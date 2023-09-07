import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css";

export default function Navbar() {
  // let navLinks = document.querySelectorAll("nav-link");
  // console.log(navLinks);

  // class el active add and remove
  let changeAvtiveLink = () => {};

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4">
        <div className="container">
          <Link className="navbar-brand fs-2 text-white" to="/">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={changeAvtiveLink}
                  className="nav-link text-white fs-5 active"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={changeAvtiveLink}
                  className="nav-link text-white fs-5 "
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={changeAvtiveLink}
                  className="nav-link text-white fs-5 "
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
