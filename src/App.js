import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'

function App() {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
      <Switch>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
