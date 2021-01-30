import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageHome from "./pages/PageHome"
import PageLogin from "./pages/PageLogin"

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <PageHome user={false}/>
      </Route>
      <Route path="/login" exact>
        <PageLogin />
      </Route>
    </Switch>
  </Router>
);
