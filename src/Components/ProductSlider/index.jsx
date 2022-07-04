import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

const ProductSlider = () => {
  const product = [
    require("../../assets/bridal1.jpg"),
    require("../../assets/bridal2.jpg"),
    require("../../assets/bridal3.jpg"),
    require("../../assets/fancy1.jpg"),
    require("../../assets/fancy3.jpg"),
    require("../../assets/wedding1.jpeg"),
    require("../../assets/wedding2.jpg"),
    require("../../assets/wedding3.jpg"),
    require("../../assets/kotanji1.jpeg"),
  ];
  return (
    <div>
      <Slide slidesToScroll={2} slidesToShow={4} style={{ width: "100%" }}>
        {product.map((i, index) => {
          return (
            <div class="card">
              <img
                src={i}
                alt="Avatar"
                width="100%"
                height="20%"
              />
              <div class="container"></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default ProductSlider;
