import "./App.css";
import { Login, Register ,Authentication} from "./_pages/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "./_constants/routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={ROUTES.REGISTER} component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
