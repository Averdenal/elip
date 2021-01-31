import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

if(Meteor.isServer){
    Meteor.methods({
        acceptRegister:(email) => {
            return Accounts.findUserByEmail(email)
        }
    })
}
