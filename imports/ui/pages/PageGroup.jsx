import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'

const PageGroup = () => {
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
                img={"./img/banner/groups-icon.png"} 
                alt={"ngroups-icon"} 
                title={"Groups"} 
                text={"Browse all the groups of the community!"}
                />
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageGroup
