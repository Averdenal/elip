import React from "react"
import {Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"
import {BannerPage} from '../components/page/banner'
import {ContainerPage,Cors} from '../components/elements/container'
import {BadgeCard} from '../components/page/bagde'
import styled from 'styled-components'
import {BadgesCollection} from '../../api/badges'
import { useTracker } from 'meteor/react-meteor-data';

const PageBadges = () => {
    const user = Meteor.userId()
    const b = useTracker(()=> {
        return BadgesCollection.find().fetch()
    }) 
   
    const makeIteams = (x) => {
        return (
            <BadgeCard exp={x.exp} pourcentage={x.pourcentage} pourcentageMess={x.pourcentageMess} title={x.title} mess={x.mess} simg={x.simg} bimg={x.bimg}/>
        )
    }

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
                      {b.map(makeIteams)}
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
    justify-content: space-between;
    flex-wrap: wrap;

`

/*const bdges = [{
    title:"Bronze User",
    mess:"Has posted more than 1 post on their profile",
    exp:"25",
    pourcentage:"0%",
    pourcentageMess:"UNLOCKED!",
    simg:"./img/badge/bronze-s.png",
    bimg:"./img/badge/bronze-b.png",
},{
    title:"Silver User",
    mess:"Has posted more than 100 posts on their profile",
    exp:"40",
    pourcentage:"0%",
    pourcentageMess:"LOCKED!",
    simg:"./img/badge/silver-s.png",
    bimg:"./img/badge/silver-b.png", 
},{
    title:"Gold User",
    mess:"Has posted more than 500 posts on their profile",
    exp:"60",
    pourcentage:"0%",
    pourcentageMess:"LOCKED!",
    simg:"./img/badge/gold-s.png",
    bimg:"./img/badge/gold-b.png", 
},{
    title:"Platinum User",
    mess:"Has posted more than 1000 posts on their profile",
    exp:"100",
    pourcentage:"0%",
    pourcentageMess:"LOCKED!",
    simg:"./img/badge/platinum-s.png",
    bimg:"./img/badge/platinum-b.png", 
}]*/