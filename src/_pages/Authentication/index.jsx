import React, { Component } from "react";
import './index.css'
import { withRouter } from 'react-router-dom'
import ROUTES from "../../_constants/routes";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      uname: "",
      pw: "",
      error: "",
      email: "",
      password: "",
      cpassword: ""
    };
  }
  login = () => {
    this.setState({
      isSignup: false
    })
  }
  signup = () => {
    console.log('isSignup')
    this.setState({
      isSignup: true
    })
  }
  loginSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const { uname, pw } = this.state
    if (uname && pw) {
      // if (uname === "jamuna@gmail.com" && pw === "1234") {
      this.props.history.push(ROUTES.HOME)
      // } else {
      //   this.setState({
      //     error: 'User name or password is wrong....'
      //   })
      // }
    } else {
      this.setState({
        error: 'Please enter all the details...'
      })
    }
  }
  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({
      [name]: value
    })
  }
  signupSubmit = (e) => {
    e.preventDefault()
    const { email, password, cpassword } = this.state
    if (email && password && cpassword) {
      this.props.history.push(ROUTES.HOME)
    }
    else {
      this.setState({
        error: 'Please enter all the details...'
      })
    }
  }
  render() {
    const { isSignup, uname, pw, error, email, password, cpassword } = this.state
    return (
      <div class="authentication">
        
        <div class="wrapper">
        <img src={require('../../assets/img/bg.jpg')} style={{ width: '300px',
    height:' 100px',
    left: '10px'}}/>
          <div class="title-text">
            <div class="title login" style={{ ...isSignup && { marginLeft: '-50%' } }}>Login</div>
            <div class="title signup">Register</div>
          </div>
          <div class="form-container">
            <div class="slide-controls">
              <input type="radio" name="slide" id="login" onClick={() => this.login()} />
              <input type="radio" name="slide" id="signup" onClick={() => this.signup()} />
              <label for="login" class="slide login">Login</label>
              <label for="signup" class="slide signup">Register</label>
              <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
              <form class="login" style={{ ...isSignup && { marginLeft: '-50%' } }} onSubmit={(e) => this.loginSubmit(e)} >
                <div class="field">
                  <input type="text" placeholder="Email Address" value={uname} name="uname" onChange={(e) => this.handleChange(e)} />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" value={pw} name="pw" onChange={(e) => this.handleChange(e)} />
                </div>
                {/* <div class="pass-link"><a href="/forgot-password">Forgot password?</a></div> */}
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div class="error">{error}</div>
              </form>
              <form class="signup" onSubmit={(e) => this.signupSubmit(e)}>
                <div class="field">
                  <input type="text" placeholder="Email Address"  name="email" value={email} onChange={(e) => this.handleChange(e)} />
                </div>
                <div class="field">
                  <input type="password" placeholder="Password"  name="password" value={password} onChange={(e) => this.handleChange(e)} />
                </div>
                <div class="field">
                  <input type="password" placeholder="Confirm password"  name="cpassword" value={cpassword} onChange={(e) => this.handleChange(e)} />
                </div>
                <div class="field btn">
                  <div class="btn-layer"></div>
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Authentication)