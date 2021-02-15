import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'

const PageEvents = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }

    return(
        <>
            <MobileNavTop />
            <ContainerPage>
                <Cors>
                    <BannerPage 
                    img={"./img/banner/events-icon.png"} 
                    alt={"events-icon"} 
                    title={"Events"} 
                    text={"Easily manage and create events or reminders!"}
                    />
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageEvents
