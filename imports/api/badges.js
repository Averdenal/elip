import { Mongo } from 'meteor/mongo';
import  {Meteor} from 'meteor/meteor';

export const BadgesCollection = new Mongo.Collection('badges');

if(Meteor.isServer){
    Meteor.publish("allBadges", function(){
        return BadgesCollection.find();
    })
    Meteor.methods({
        "createdBadges" : function({title, mess, exp, pourcentage, pourcentageMess, simg, bimg}){
            return BadgesCollection.insert({
                title:title,
                mess:mess,
                exp:exp,
                pourcentage:pourcentage,
                pourcentageMess:pourcentageMess,
                simg:simg,
                bimg:bimg,
            })
        },
        "updatedBadges": function(_id,title, mess, exp, pourcentage, pourcentageMess, simg, bimg){
            return BadgesCollection.update({_id},
                {
                title:title,
                mess:mess,
                exp:exp,
                pourcentage:pourcentage,
                pourcentageMess:pourcentageMess,
                simg:simg,
                bimg:bimg,
            })
        }
        
    })
}
if(Meteor.isClient){
    Meteor.subscribe("allBadges")
}