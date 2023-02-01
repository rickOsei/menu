import React from "react";

function Menu({ title, price, img, desc }) {
  return (
    <article className="dish">
      <img src={img} alt={title} />
      <div className="info">
        <header className="upper">
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="info-text">{desc}</p>
      </div>
    </article>
  );
}

export default Menu;
