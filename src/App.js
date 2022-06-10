import "./App.css";
import { Home, Authentication, Admin } from "./_pages/index";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'

function App() {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={"/"}><Authentication /></Route>
        <Route exact path={'/home'} ><Home /></Route>
        <Route exact path={'/admin'} ><Admin /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
