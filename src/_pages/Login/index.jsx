import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        Username
        <input type="text" name="username" />
        Password
        <input type="password" name="password" />
        <button> Signin</button>
      </div>
    );
  }
}

export default Login;
