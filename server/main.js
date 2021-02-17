import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import '../imports/api/users'
import '../imports/api/badges'

Meteor.startup(() => {
  if(Meteor.isClient){
    Accounts.createUser({
      username:"admin",
      email:"admin@fr.fr",
      password:"admin",
      profile:{
        role:"ROLE_ADMIN",
        lvl:0,
        Badges:[],
        img:"./img/avatar/08.jpg",
        banner:"",
        bio:"salut les gens",
      }
    })
  }
});
