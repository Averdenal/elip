import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage} from '../components/elements/container'

const PageQuests = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }

    return(
        <>
            <MobileNavTop />
            <ContainerPage>
                <BannerPage 
                img={"./img/banner/quests-icon.png"} 
                alt={"quests-icon"} 
                title={"Quest"} 
                text={"Complete quests to gain experience and level up!"}
                />
            </ContainerPage>
        </>
    )
}

export default PageQuests
