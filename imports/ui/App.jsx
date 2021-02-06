import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageLogin from "./pages/PageLogin"
import PageHome from "./pages/PageHome"
import PageBadges from "./pages/PageBadges"
import PageEvents from "./pages/PageEvents"
import PageForums from "./pages/PageForums"
import PageGroup from "./pages/PageGroup"
import PageMarketplace from "./pages/PageMarketplace"
import PageMembers from "./pages/PageMembers"
import PageQuests from "./pages/PageQuests"
import PageStreams from "./pages/PageStreams"
import { useTracker } from 'meteor/react-meteor-data';
import '../api/users'



export const App = () => {
  const user = Meteor.user()
  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <PageHome user={user}/>
        </Route>
        <Route path="/Badges" exact>
          <PageBadges />
        </Route>
        <Route path="/Events" exact>
          <PageEvents />
        </Route>
        <Route path="/Forums" exact>
          <PageForums />
        </Route>
        <Route path="/Group" exact>
          <PageGroup />
        </Route>
        <Route path="/Marketplace" exact>
          <PageMarketplace />
        </Route>
        <Route path="/Members" exact>
          <PageMembers />
        </Route>
        <Route path="/Quests" exact>
          <PageQuests />
        </Route>
        <Route path="/Streams" exact>
          <PageStreams />
        </Route>
        <Route path="/login" exact>
          <PageLogin />
        </Route>
      </Switch>
    </Router>
  )
  
};
