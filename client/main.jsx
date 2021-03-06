import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import {Tracker} from "meteor/tracker"

Meteor.startup(() => {
  Tracker.autorun(()=> {
    const userReady = Meteor.subscribe('allUsers').ready();
    if(userReady){
      render(<App/>, document.getElementById('react-target'));
    }else{
      console.log("waiting")
    }
  })
  
});
