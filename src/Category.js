import React from "react";

function Category({ category, filteredMenu }) {
  return (
    <>
      {category.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => filteredMenu(item)}
            className="btn-menu"
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

export default Category;
