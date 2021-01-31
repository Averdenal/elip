import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageHome from "./pages/PageHome"
import PageLogin from "./pages/PageLogin"
import { useTracker } from 'meteor/react-meteor-data';
import '../api/users'


export const App = () => {
  const user = useTracker(() => { return Meteor.user()});
  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <PageHome user={user}/>
        </Route>
        <Route path="/login" exact>
          <PageLogin />
        </Route>
      </Switch>
    </Router>
  )
  
};
