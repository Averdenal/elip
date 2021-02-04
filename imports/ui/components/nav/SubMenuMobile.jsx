import React from 'react'
import styled, {css} from 'styled-components'
import {SubMenuMobileUser} from './SubMenuMobileUser'
import {SubMenuMobileIteam} from './SubMenuMobileIteam'
import {SectionMiniBadge} from '../sectionMiniBadges'
import { Facebook,Grid,ShoppingBag,Friend,Messages,Notification,Settings} from "../svg"

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
                    <SubMenuMobileIteam text={"Newsfeed"} active={true}>
                        <Facebook width="25" height="25" fill="#adafca"/>
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