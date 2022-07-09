import React from "react";

const Category = () => {
  return (
    <section class="category">
      <h1 class="heading">
        Shop by <span>Category</span>
      </h1>

      <div class="box-container">
        <a href="/products" class="box">
          <img src={require('../../assets/Banner1.jpeg')} alt="" width='100%' height={200} />
           <div class="content">
            <h3>Bridal Sarees</h3>
          </div>
        </a>

        <a href="/products" class="box">
          <img src={require('../../assets/kotanji1.jpeg')} alt="" />
          <h3>Kottanji Sarees</h3>
        </a>

        <a href="/products" class="box">
          <img src={require('../../assets/fancy1.jpg')} alt="" />
          <h3>Soft Skills</h3>
        </a>

        <a href="/products" class="box">
          <img src={require('../../assets/wedding1.jpeg')} alt=""  />
          <h3>Wedding Sarees</h3>
        </a>
      </div>
    </section>
  );
};
export default Category;
