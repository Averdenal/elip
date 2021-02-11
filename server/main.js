import { Meteor } from 'meteor/meteor';
import '../imports/api/users'
import { Accounts } from 'meteor/accounts-base'

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
