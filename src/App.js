import React, { useState } from "react";
import item from "./data";
import Menu from "./Menu";
import Category from "./Category";

const newCategories = ["all", ...new Set(item.map((dish) => dish.category))];

function App() {
  const [menu, setMenu] = useState(item);
  const [category, setCategory] = useState(newCategories);
  const filteredMenu = (category) => {
    if (category === "all") {
      return setMenu(item);
    }
    const newMenu = item.filter((dish) => dish.category === category);
    setMenu(newMenu);
  };

  return (
    <main className=" menu container">
      <div className="title">
        <h1>our menu</h1>
        <div className="underline"></div>
      </div>
      <div className="buttons">
        <Category category={category} filteredMenu={filteredMenu} />
      </div>
      <section className="menu-sec">
        {menu.map((dish) => {
          return <Menu {...dish} key={dish.id} />;
        })}
      </section>
    </main>
  );
}

export default App;
