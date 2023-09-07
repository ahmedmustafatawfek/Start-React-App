import React from "react";
import "./aboutStyle.css";

export default function About() {
  return (
    <section className="about text-white ">
      <div className="container ">
        <div className="header text-center">
          <h2 className="pt-5 pb-2 title text-center">ABOUT COMPONENT</h2>
          <i class="fa-solid fa-star star"></i>
        </div>
        <div className="text py-4 mx-auto">
          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
