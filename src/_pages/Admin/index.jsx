import React from "react";
import './index.css'
import { Dashboard } from '../../_components/index'
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
      < Dashboard />
      </div>
    );
  }
}
export default Admin;
