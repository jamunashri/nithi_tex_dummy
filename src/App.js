import "./App.css";
import { Login, Register } from "./_pages/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "./_constants/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={ROUTES.REGISTER} component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
