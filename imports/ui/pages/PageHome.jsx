import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {BigTopNav} from '../components/nav/topnav'

const PageHome = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }


    return(
        <div>
            <BigTopNav />
        </div>
    )
}

export default PageHome