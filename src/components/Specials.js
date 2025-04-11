import React from "react";
import { MenuCard } from "./MenuCard";

const Specials = () => {
  return (
    <section id="specials" className="specials">
      <header>
        <h2 className="h2--primary">Specials</h2>
        <button className="btn--primary">Online Menu</button>
      </header>
      <div className="special-cards">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </section>
  );
};

export default Specials;
