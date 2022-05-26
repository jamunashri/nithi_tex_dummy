import React from "react";
import './index.css'
import { Header, Footer } from '../../_components/index'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
export default Home;
