import React from "react"
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'

const PageForums = () => {
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
                    img={"./img/banner/forums-icon.png"} 
                    alt={"forums-icon"} 
                    title={"Forums"} 
                    text={"Talk about anything! Gaming, music, comics and more!"}
                    />
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageForums
