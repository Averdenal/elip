import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';

const PageHome = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }


    return(
        <div>
            <h1>PageHome</h1>
        </div>)
}

export default PageHome