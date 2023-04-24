import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Unauthorized from './components/Unauthorized';

function App() {
  const isLoggedIn = true; // replace with your authentication logic

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <Redirect to="/unauthorized" />}
        </Route>
        <Route path="/account">
          {isLoggedIn ? <Account /> : <Redirect to="/unauthorized" />}
        </Route>
        <Route path="/unauthorized">
          <Unauthorized />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
