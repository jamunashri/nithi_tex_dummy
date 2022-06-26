import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home, About, Products, Cart, Login, Register ,Admin, NewUser, AdminUser, ViewUser} from "./Pages/index";

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
        <Route exact path={"/admin"}>
          <Admin />
        </Route>
        <Route exact path={'/admin/user'}>
          <AdminUser />
        </Route>
        <Route exact path={'/admin/user/new'}>
          <NewUser />
        </Route>
        <Route exact path={'/admin/user/view'}>
          <ViewUser />
        </Route>
        <Route exact path={'/admin/product'}>
          <AdminUser />
        </Route>
        <Route exact path={'/admin/product/new'}>
          <NewUser />
        </Route>
        <Route exact path={'/admin/product/view'}>
          <ViewUser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
