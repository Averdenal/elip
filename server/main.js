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
        role:"admin",
      }
    })
  }
});
