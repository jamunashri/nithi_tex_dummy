import React from "react";

import "../Header/index.css";
import "./index.css";

const Footer = () => {
  return (
    <>
      <section class="quick-links">
        <a href="/" class="logo">
          <i class="fas fa-store"></i> Nithi Tex
        </a>
        <div class="links">
          <a href="/"> home </a>
          <a href="/contact"> about </a>
          <a href="/products"> products </a>
          <a href="/contact"> contact </a>
          <a href="/login"> login </a>
          <a href="/register"> register </a>
          <a href="/cart"> cart </a>
        </div>

        <div class="share">
          <a href="https://www.facebook.com/nithitexsarees/" target='blank' class="fab fa-facebook-f"></a>
          <a href="https://twitter.com/NithiTex" class="fab fa-twitter" target='blank'></a>
          <a href="https://www.instagram.com/nithitex/" class="fab fa-instagram" target='blank'></a>
          <a href="https://www.youtube.com/channel/UCSROrhTc_QXCt4aKy-bsO7A" class="fab fa-youtube" target='blank'></a>
        </div>
      </section>

      <section class="credit">
        <p>
          created by <span>Nithi Tex</span> | all rights reserved!{" "}
        </p>
        <img src="images/card_img.png" alt="" />
      </section>
    </>
  );
};
export default Footer;
