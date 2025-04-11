import React from "react";
import Restaurant1 from "../assets/Mario and Adrian A.jpg";
import Restaurant2 from "../assets/Mario and Adrian b.jpg";

const Chicago = () => {
  return (
    <section id ="about" className="chicago">
      <div className="section-details">
        <h1 className="h1--secondary">Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="description-images">
        <div>
          <img src={Restaurant1} alt="Restaurant" />
        </div>
        <div>
          <img src={Restaurant2} alt="Restaurant" />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
