import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage, Cors} from '../components/elements/container'
import { SettingsInfoUser } from '../components/settingsPage/settingsUser'
import styled from "styled-components"

const PageSettings = () => {
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
                    img={"./img/banner/accounthub-icon.png"} 
                    alt={"accounthub-icon"} 
                    title={"Account Hub"} 
                    text={"Profile info, messages, settings and much more!"}
                    />
                    <SettingsInfoUser />
                </Cors>
            </ContainerPage>
            
            
        </>
    )
}

export default PageSettings