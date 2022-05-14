import React from "react";
import "./index.css";
import { TextField, Box } from "@mui/material";

class Login extends React.Component {
  // constructor(props) {

  // }
  registerUser = () => {
    console.log("signup");
  };
  render() {
    return (
      <div class="cont">
        <div class="form sign-in">
          <h2>Sign In</h2>
          {/* <label> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              variant="outlined"
              id="outlined-required"
              label="User Name"
              defaultValue=""
            />
            {/* <span>Email Address</span>
            <input type="email" name="email" />
          </label> */}
            <TextField id="filled-basic" label="Filled" variant="filled" />
            {/* <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label> */}
            <button
              class="submit"
              type="button"
              onClick={() => this.registerUser()}
            >
              Sign In
            </button>
            <p class="forgot-pass">Forgot Password ?</p>
          </Box>
          {/* 
          <div class="social-media">
            <ul>
              <li>
                <img src="images/facebook.png" />
              </li>
              <li>
                <img src="images/twitter.png" />
              </li>
              <li>
                <img src="images/linkedin.png" />
              </li>
              <li>
                <img src="images/instagram.png" />
              </li>
            </ul>
          </div> */}
        </div>

        <div class="sub-cont">
          <div class="img">
            <div class="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div class="img-btn">
              <span class="m-up" onClick={() => this.registerUser()}>
                Sign Up
              </span>
              <span class="m-in">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
