import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {BigTopNav} from '../components/nav/topnav'
import {MobileNavTop} from "../components/nav/mobileNavTop"

const PageHome = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }


    return(
        <div>
            <MobileNavTop />
        </div>
    )
}

export default PageHome