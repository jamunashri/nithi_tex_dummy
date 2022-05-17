import React, { Component } from "react";
import './index.css'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      uname: '',
      password: '',
      cpassword: ''
    }
  }
  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({
      [name]: value
    })

  }
  handleSubmit = () => {
    const { fname, lname, uname, password, cpassword } = this.state
    if (fname && lname && uname && password && cpassword) {

    } else {

    }
  }
  render() {
    const { fname, lname, uname, password, cpassword } = this.state
    return (
      <div className="sign-up-form">
        <div className="login-heading">
          Register
        </div>
        <div >
          <input
            type="email"
            id="userId"
            name="fname"
            value={fname}
            onChange={(e) => this.handleChange(e)}
            placeholder="First Name"
            required
            className="login-user-input"
          />
        </div>
        <div >
          <input
            type="email"
            id="userId"
            value={lname}
            name="lname"
            onChange={(e) => this.handleChange(e)}
            placeholder="Last Name"
            required
            className="login-user-input"
          />
        </div>
        <div >
          <input
            type="email"
            id="userId"
            name="uname"
            onChange={(e) => this.handleChange(e)}
            value={uname}
            placeholder="User name"
            required
            className="login-user-input"
          />
        </div>

        <div >
          <input type="password" onChange={(e) => this.handleChange(e)} id="pass" value={password} name="password" required placeholder="Password" className="login-user-input" />
        </div>
        <div >
          <input type="password" onChange={(e) => this.handleChange(e)} id="pass" value={cpassword} name="cpassword" required placeholder=" Confirm Password" className="login-user-input" />
        </div>
        <p className="login-terms">By continuing, you agree to the Terms of Use and Privacy Policy.</p>
        <button type="submit" onClick={() => this.handleSubmit()}>REGISTER</button>
        <a href="/" >Already a User? </a>
      </div>
    );
  }
}
