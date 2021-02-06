import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage} from '../components/elements/container'

const PageMarketplace = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }

    return(
        <>
            <MobileNavTop />
            <ContainerPage>
                <BannerPage 
                img={"./img/banner/marketplace-icon.png"} 
                alt={"marketplace-icon"} 
                title={"marketplace"} 
                text={"The best place for the community to buy and sell!"}
                />
            </ContainerPage>
        </>
    )
}

export default PageMarketplace
