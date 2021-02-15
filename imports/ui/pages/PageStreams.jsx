import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage, Cors} from '../components/elements/container'

const PageStreams = () => {
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
                img={"./img/banner/streams-icon.png"} 
                alt={"streams-icon"} 
                title={"Streams"} 
                text={"Check out all the members streams!"}
                />
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageStreams
