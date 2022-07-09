import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  Home,
  About,
  Products,
  Cart,
  Login,
  Register,
  Admin,
  NewUser,
  AdminUser,
  ViewUser,
} from "./Pages/index";
import NewCategory from "./Pages/NewCategory";

function App() {
  const history = createBrowserHistory();
  const productTitle = "Add new Product";
  const categoryTitle = "Add new Category";
  const categoryInput = [
    { id: 1, labels: "Image Path", type: "text", placeholder: "", name:"ImagePath" },
    {
      id: 2,
      labels: "Category",
      type: "text",
      placeholder: "",
      name: "CategoryName"
    },
  ];
  const productInput = [
    {
      id: 1,
      label: "Name",
      type: "text",
      placeholder: "",
    },
    {
      //Needs to change as select box
      id: 2,
      label: "Category",
      type: "text",
      placeholder: "",
    },
    {
      id: 3,
      label: "SKU Number",
      type: "text",
      placeholder: "",
    },
    {
      id: 4,
      label: "Video URL",
      type: "text",
      placeholder: "",
    },
    {
      id: 5,
      label: "Color",
      type: "text",
    },
    {
      id: 6,
      label: "Quantity",
      type: "number",
      placeholder: "",
    },
    {
      id: 10,
      label: "Price",
      type: "text",
    },
    {
      id: 11,
      label: "Reseller Price",
      type: "text",
    },
    {
      id: 7,
      label: "Length",
      type: "text",
    },
    {
      id: 8,
      label: "Weight",
      type: "text",
    },
    {
      id: 9,
      label: "Blouse Attached",
      type: "text",
    },
    {
      id: 12,
      label: "Discount",
      type: "text",
    },
    {
      id: 13,
      label: "Description",
      type: "textarea",
    },
  ];
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
        <Route exact path={"/admin/user"}>
          <AdminUser title={"Add New User"} />
        </Route>
        <Route exact path={"/admin/user/new"}>
          <NewUser title={productTitle} inputs={productInput} />
        </Route>
        <Route exact path={"/admin/category/new"}>
          <NewCategory title={categoryTitle} inputs={categoryInput} />
        </Route>
        <Route exact path={"/admin/user/view"}>
          <ViewUser />
        </Route>
        <Route exact path={"/admin/product"}>
          <AdminUser title={"Add New Product"} />
        </Route>
        <Route exact path={"/admin/category"}>
          <AdminUser title={"Add New Category"} />
        </Route>
        <Route exact path={"/admin/cary/new"}>
          <NewUser title={productTitle} inputs={productInput} />
        </Route>
        <Route exact path={"/admin/product/new"}>
          <NewUser title={productTitle} inputs={productInput} />
        </Route>
        <Route exact path={"/admin/product/view"}>
          <ViewUser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
