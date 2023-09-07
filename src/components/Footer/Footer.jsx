import React from "react";
import "./footerStyle.css";

export default function Footer() {
  return (
    <footer className="text-white text-center">
      <div className="contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="location">
                <h3 className="pb-2 fs-2">Location</h3>
                <p className="pb-2 ">2215 John Daniel Drive</p>
                <p className="pb-2">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 fs-5">
              <div className="social ">
                <h2 className="fs-3 pb-4 text-center"> AROUND THE WEB</h2>
                <div className="links d-flex justify-content-center">
                  <i class="fa-brands fa-facebook mx-2"></i>
                  <i class="fa-brands fa-twitter mx-2"></i>
                  <i class="fa-brands fa-linkedin-in mx-2"></i>
                  <i class="fa-solid fa-globe mx-2"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <h2  className="pb-2">ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-1">
        <p className="pt-2">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
