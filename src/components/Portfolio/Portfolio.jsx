import React from "react";
import "./portfolio.css";

import img1 from "../../imgaes/poert1.png";
import img2 from "../../imgaes/port2.png";
import img3 from "../../imgaes/port3.png";

export default function Portfolio() {


  // when clicked on card display the image on large window
  return (
    <section className="portfolio">
      <div className="container ">
        <div className="header text-center">
          <h2 className="pt-5 pb-2 titlee text-center">PORTFOLIO COMPONENT</h2>
          <i class="fa-solid fa-star starr"></i>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img1} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img2} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img3} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img1} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img2} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 py-4">
            <div className="imag ">
              <img src={img3} alt="" />
              <div className="layer ">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
