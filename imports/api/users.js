import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'


if(Meteor.isServer){
    Meteor.publish("allUsers", function(){
        return Meteor.users.find({},{
            fields:{services:0}
        })
    })
    Meteor.methods({
        acceptRegister:(email) => {
            return Accounts.findUserByEmail(email)
        },
    })
}