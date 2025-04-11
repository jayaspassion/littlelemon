import React from "react";
import LemonDessert from "../assets/lemon dessert.jpg";

export const MenuCard = () => {
  return (
    <div className="menu-card">
      <img src={LemonDessert} alt="Menu Item" />
      <div>
        <h3 className="h3--primary">Lemon Dessert</h3>
        <p>$25</p>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit.
      </p>
      <h2>Order a Delivery</h2>
    </div>
  );
};
