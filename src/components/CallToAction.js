import React from "react";
import food from "../assets/restauranfood.jpg";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div>
        <h1 className="section-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn-primary">Reserve a Table</button>
      </div>
      <div className="img-container">
        <img src={food} alt="Food" style={{ maxHeight: "25rem" }} />
      </div>
    </section>
  );
};

export default CallToAction;
