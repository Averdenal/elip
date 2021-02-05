import React from 'react'
import styled, {css} from 'styled-components'
import {SubMenuMobileUser} from './SubMenuMobileUser'
import {SubMenuMobileIteam} from './SubMenuMobileIteam'
import {SectionMiniBadge} from '../sectionMiniBadges'
import { Overview,Group,Members,Badges,Quests,Streams,Events,Forums,Marketplace } from "../svg"

export const SubMenuMobile = (props) => {
    return(<>
            <StyledSubMenuMobileBack active={props.active} onClick={props.onClick}>
            </StyledSubMenuMobileBack>
            <StyledSubMenuMobile active={props.active}>
                <StyledSubMenuMobileContainer>
                    <SubMenuMobileUser />
                    <br/>
                    <SectionMiniBadge />
                    <div>
                    <SubMenuMobileIteam text={"Overview"} active={true}>
                        <Overview width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Group"} active={false}>
                        <Group width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Members"} active={false}>
                        <Members width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Badges"} active={false}>
                        <Badges width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Quests"} active={false}>
                        <Quests width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Streams"} active={false}>
                        <Streams width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Events"} active={false}>
                        <Events width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Forums"} active={false}>
                        <Forums width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                    <SubMenuMobileIteam text={"Marketplace"} active={false}>
                        <Marketplace width="25" height="25" fill="#adafca"/>
                    </SubMenuMobileIteam>
                  
                    </div>
                    
                </StyledSubMenuMobileContainer>
            </StyledSubMenuMobile>
        </>
    )
}

//STYLE
const StyledSubMenuMobileBack = styled.div`
    transition:0.3s ease-in-out ;
    position: absolute;
    top: 0;
    right: 0;
    background-color:#00000000;
    height:100vh;
    width:0%;
    z-index: 10001;
    opacity:1;
    ${props => props.active && css`
        background-color:#00000080;
        width:100%;
  `}
`

const StyledSubMenuMobile = styled.div`
    transition:0.3s ease-in-out ;
    position: absolute;
    top: 0;
    left: -320px;
    background-color:white;
    height:100vh;
    width:320px;
    z-index: 100000;
    overflow-y:scroll;
    display:flex;
    flex-direction:column;
    ${props => props.active && css`
        left: 0px;
  `}
`
const StyledSubMenuMobileContainer = styled.div`
    margin:5% 5% 0 5%;
    word-wrap: break-word;
    width:90%;
    height:100%;
`