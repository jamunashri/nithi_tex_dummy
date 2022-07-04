import React from "react";
import { Banner, Footer, Header,Category , MovingContent, Sliders, ProductSlider} from "../../Components";

const Home = () => {
  return (
    <>
    <MovingContent />
      <Header />
      <Sliders />
      <Banner />
      <Category />
      <ProductSlider />
      <Footer />
    </>
  );
};
export default Home