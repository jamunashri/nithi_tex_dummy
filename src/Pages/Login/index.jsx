import React from "react";
import { Header } from "../../Components";

const Login = () => {
  return (
    <>
    <Header />
    <section class="login">
      <form action="">
        <h3>login now</h3>
        <input
          type="email"
          name=""
          placeholder="enter your email"
          id=""
          class="box"
        />
        <input
          type="password"
          name=""
          placeholder="enter your password"
          id=""
          class="box"
        />
        <div class="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me"> remember me </label>
        </div>
        <input type="submit" value="login now" class="btn" />
        <p>don't have an account?</p>
        <a href="/register" class="btn link">
          register now
        </a>
      </form>
    </section>
    </>
  );
};
export default Login;
