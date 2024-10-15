import React from "react";
import "./ProductCategories.css";

const ProductCategories = () => {
  const categories = [
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category01.jpg",
      h2: "High Quality Seeds",
    },
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category02.jpg",
      h2: "Fresh Flowers",
    },
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category03.jpg",
      h2: "Premium Cartridges",
    },
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category04.jpg",
      h2: "Top Concentrates",
    },
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category01.jpg",
      h2: "Refined Oils",
    },
    {
      name: "24 Items",
      image: "https://html.merku.love/herbalist/img/index2/category01.jpg",
      h2: "Delicious Edibles",
    },
  ];

  return (
    <div className="categoriesContainer  ">
      {categories.map((category, index) => (
        <div className="categoryCard " key={index}>
          <div className="categoryImageContainer">
            <img
              src={category.image}
              alt={category.name}
              className="categoryImage"
            />
            <div className="categoryTextOverlay">
              <h4>{category.name}</h4>
            </div>
          </div>
          <h2 className="categoryh2">{category.h2}</h2> {/* Display the h2 */}
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
