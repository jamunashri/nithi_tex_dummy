import React from "react";

const Category = () => {
  return (
    <section class="category">
      <h1 class="heading">
        Shop by <span>Category</span>
      </h1>

      <div class="box-container">
        <a href="/products" class="box">
          <img src="images/cat_img1.png" alt="" />
          <h3>Bridal Sarees</h3>
        </a>

        <a href="/products" class="box">
          <img src="images/cat_img2.png" alt="" />
          <h3>Kottanji Sarees</h3>
        </a>

        <a href="/products" class="box">
          <img src="images/cat_img3.png" alt="" />
          <h3>Soft Skills</h3>
        </a>

        <a href="/products" class="box">
          <img src="images/cat_img4.png" alt="" />
          <h3>Wedding Sarees</h3>
        </a>
      </div>
    </section>
  );
};
export default Category;
