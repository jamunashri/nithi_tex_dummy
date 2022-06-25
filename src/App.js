import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home, About, Products, Cart, Login, Register } from "./Pages/index";

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/contact"}>
          <About />
        </Route>
        <Route exact path={"/products"}>
          <Products />
        </Route>
        <Route exact path={"/cart"}>
          <Cart />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/about"}>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
