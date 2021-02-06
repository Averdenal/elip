import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage} from '../components/elements/container'

const PageHome = (props) => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }

    return(
        <>
            <MobileNavTop/>
            <ContainerPage>
                <BannerPage 
                img={"./img/banner/newsfeed-icon.png"} 
                alt={"newsfeed-icon"} 
                title={"Newsfeed"} 
                text={"Check what your friends have been up to!"}
                />
            </ContainerPage>
        </>
    )
}

export default PageHome
