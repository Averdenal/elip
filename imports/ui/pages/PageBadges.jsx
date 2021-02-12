import React from "react"
import {Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage} from '../components/elements/container'

const PageBadges = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }
    return(
        <>
            <MobileNavTop />
            <ContainerPage>
                <BannerPage 
                img={"./img/banner/badges-icon.png"} 
                alt={"badges-icon"} 
                title={"Badges"} 
                text={"Check out all your unlocked and locked badges!"}
                />
            </ContainerPage>
        </>
    )
}

export default PageBadges
