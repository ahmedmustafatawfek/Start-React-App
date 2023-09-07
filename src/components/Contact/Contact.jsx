import React from "react";
import "./contactStyle.css";

export default function Contact() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="header text-center">
          <h2 className="pt-5 pb-2 titlee text-center">CONATCT SECTION</h2>
          <i class="fa-solid fa-star starr"></i>
        </div>
        <div className="inputs  mx-auto py-5">
          <input type="text" placeholder="userName" className="w-100 py-3 my-4" />
          <input type="text" placeholder="userAge" className="w-100 py-3 my-4" />
          <input type="text" placeholder="userEmail" className="w-100 py-3 my-4" />
          <input type="text" placeholder="userPassword" className="w-100 py-3 my-4" />

          <button className="btn py-2 px-4 mt-2"> Send Message</button>
        </div>
      </div>
    </section>
  );
}
