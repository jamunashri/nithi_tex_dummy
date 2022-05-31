import React from "react";
import './index.css'
import { Header, Footer, MuiTable } from '../../_components/index'
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
        <MuiTable />
        <Footer />
      </div>
    );
  }
}
export default Home;
