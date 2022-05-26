import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBox } from '../index'
import './index.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sideBarIsOpen: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <header className="row">
                    <div>
                        <button
                            type="button"
                            className="open-sidebar"
                            onClick={() => this.setState({ sideBarIsOpen: true })}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="brand" to="/">
                            NithiTex
                        </Link>
                    </div>
                    <div>
                        <SearchBox />
                    </div>
                    <div>
                        <Link to="/cart">
                            Cart
                            {/* {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )} */}
                        </Link>
                        {/* {userInfo ? ( */}
                        <div className="dropdown">
                            <Link to="#">
                                {/* {userInfo.name} <i className="fa fa-caret-down"></i>{' '} */}
                                <i className="fa fa-caret-down"></i>
                            </Link>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/profile">User Profile</Link>
                                </li>
                                <li>
                                    <Link to="/orderhistory">Order History</Link>
                                </li>
                                <li>
                                    {/* <Link to="#signout" onClick={signoutHandler}> */}
                                    Sign Out
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                        {/* ) : ( */}
                        <Link to="/signin">Sign In</Link>
                        {/* )} */}
                        {/* {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )} */}
                        {/* {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )} */}
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
export default Header