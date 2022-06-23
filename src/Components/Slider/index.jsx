// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
 
// const Slider = (
//   <AwesomeSlider>
//        <div data-src={require('../../assets/Slider1.jpg')} />
//     <div data-src={require('../../assets/Slider2.jpg')} />
//   </AwesomeSlider>
// );

// export default Slider


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
   <div data-src={require('../../assets/Slider1.jpg')} />
   <div data-src={require('../../assets/Slider2.jpg')} />
  </AutoplaySlider>
);
export default Slider