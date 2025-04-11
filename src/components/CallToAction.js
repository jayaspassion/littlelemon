import React from "react";
import food from "../assets/restauranfood.jpg";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="section-details">
        <h1 className="h1--primary color--primary">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div>
          <button className="btn--primary">Reserve a Table</button>
        </div>
      </div>
      <div className="img-container">
        <img src={food} alt="Food" style={{ maxHeight: "25rem" }} />
      </div>
    </section>
  );
};

export default CallToAction;
