import React from "react";
import { Navbar } from "../../_components";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        Home page
      </div>
    );
  }
}
export default Home;
