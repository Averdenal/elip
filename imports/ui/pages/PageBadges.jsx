import React from "react"
import {Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'
import {BadgeCard} from '../components/page/bagde'
import styled from 'styled-components'

const PageBadges = () => {
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
                    img={"./img/banner/badges-icon.png"} 
                    alt={"badges-icon"} 
                    title={"Badges"} 
                    text={"Check out all your unlocked and locked badges!"}
                    />
                    <ContentBadges>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>
                        <BadgeCard exp={15} pourcentage={"55%"} pourcentageMess={"3/6 demos"} title={"Badges"} mess={"Encore un anivaisaire fr verv e"} simg={"./img/badge/age-s.png"} bimg={"./img/badge/age-b.png"}/>

                    </ContentBadges>
                </Cors>
            </ContainerPage>
        </>
    )
}

export default PageBadges

const ContentBadges = styled.div`
    grid-column:1/5;
    grid-row:2;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`