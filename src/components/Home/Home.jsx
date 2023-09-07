import React from "react";
import "./homeStyle.css";

export default function Home() {
  return (
    <section className="info ">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="img">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
                  alt=""
                />
              </div>
              <div className="content py-4 text-white">
                <h2 className="fs-1 pt-2">START FRAMEWORK</h2>
                <i class="fa-solid fa-star"></i>
                <p className="py-2">
                  Graphic Artist - Web Designer - Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
