import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'

const PageMembers = () => {
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
                img={"./img/banner/members-icon.png"} 
                alt={"members-icon"} 
                title={"Members"} 
                text={"Browse all the members of the community!"}
                />
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageMembers
