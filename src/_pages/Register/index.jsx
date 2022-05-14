import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        Registers
        <div class="form sign-up">
          <h2>Sign Up</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" />
          </label>
          <button type="button" class="submit">
            Sign Up Now
          </button>
        </div>
      </div>
    );
  }
}
