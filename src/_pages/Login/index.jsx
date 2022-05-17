import React from "react";
import "./index.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { uname: '', password: '' };
  }
  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({
      [name]: value
    })

  }
  handleSubmit = () => {
    const { uname, password } = this.state
    if (uname && password) {

    } else {

    }
  }
  render() {
    const { uname, password } = this.state
    return (
      <div className="sign-in-form">
        <div className="login-heading">
          Login
        </div>
        <div >
          <input
            type="email"
            id="userId"
            name="uname"
            value={uname}
            placeholder="User name"
            required
            className="login-user-input"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div >
          <input type="password" id="pass" name="password" onChange={(e) => this.handleChange(e)} value={password} required placeholder="Password" className="login-user-input" />
        </div>
        {/* <div className="remember-me">
          <input type="checkbox" id="checkbox" name="checkAccount" />
          <label for="checkbox" className="remember-me-label">Remember me</label>
        </div> */}
        <p className="login-terms">By continuing, you agree to the Terms of Use and Privacy Policy.</p>
        <button type="submit" onClick={() => this.handleSubmit()}>LOG IN</button>
        <a href="/register" >New User? </a>
      </div>
    );
  }
}

export default Login;
