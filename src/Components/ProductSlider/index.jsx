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
      <Slide slidesToScroll={2} slidesToShow={3}>
        {product.map((i, index) => {
          return (
            //             <div class="card">
            //   <img src={i} alt="Denim Jeans" style={{width:'100%', height:'50%'}} />
            //   <h1>Nithi Tex Saree</h1>
            //   <p class="price">Rs.1200</p>
            //   <p>Bridal Saree</p>
            //   <p><button className="buy-now">Buy Now</button></p>
            // </div>
            <div class="shell">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img src={i} alt="Product" class="img-responsive" />
                      </div>
                      <div class="wsk-cp-text">
                        <div class="category">
                          <span>Bridal</span>
                        </div>
                        <div class="title-product">
                          <h3>Bridal Saree</h3>
                        </div>
                        <div class="description-prod">
                          <p>Description of the Product</p>
                        </div>
                        <div class="card-footer">
                          <div class="wcf-left">
                            <span class="price">Rs 1200.000</span>
                          </div>
                          <div class="wcf-right">
                            <a href="#" class="buy-btn">
                              <i class="zmdi zmdi-shopping-basket"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default ProductSlider;
