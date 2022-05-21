import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "../../_components/index";
import './index.css'
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      dropdown: false,
    };
  }
  closeMobileMenu = () => {
    const { click } = this.state;
    this.setState({
      click: !click,
    });
  };
  mouseEvent = () => {
    const { dropdown } = this.state;
    this.setState({
      dropdown: !dropdown,
    });
  };
  render() {
    const { click, dropdown } = this.state;
    return (
      <div>
        <nav className="navbar">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => this.closeMobileMenu}
          >
            Nithi_tex
            <i class="fab fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={() => this.closeMobileMenu}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => this.closeMobileMenu}
              >
                Help
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => this.mouseEvent()}
              onMouseLeave={() => this.mouseEvent()}
            >
              <Link
                to="/Services"
                className="nav-links"
                onClick={() => this.closeMobileMenu}
              >
                Home <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={() => this.closeMobileMenu}
              >
                Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={() => this.closeMobileMenu}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={() => this.closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Button />
        </nav>
      </div>
    );
  }
}
export default Navbar;
