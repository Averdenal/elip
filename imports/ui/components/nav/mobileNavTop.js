import React, {useState} from 'react'
import {StyledMobileNavTop, 
    StyledMobileNavTopAction,
    StyledMobileNavTopLogo,
    StyledMobileNavTopButtom,
    StyledMobileNavTopButtomActions,
} from "../../elements/styledMobileNavTop"
import { Facebook,Grid,ShoppingBag,Friend,Messages,Notification,Settings} from "../svg"
import { SubMenuMobile } from "./SubMenuMobile"

export const MobileNavTop = () => {
    const [show,setShow] = useState(false)

    const Show = () => {
        setShow(show?false:true)  
    }

    return(<>
        <StyledMobileNavTop>
            <StyledMobileNavTopLogo>
                <Facebook width="25" height="25" fill="white"/>
                <h1>Eliptium</h1>
            </StyledMobileNavTopLogo>
            <StyledMobileNavTopAction>
                <a onClick={Show}><Grid width="20" height="20" fill="white" /></a>
            </StyledMobileNavTopAction>
        </StyledMobileNavTop>

        <SubMenuMobile active={show} onClick={Show}/>

        <StyledMobileNavTopButtom>
            <StyledMobileNavTopButtomActions>
                <a>
                    <ShoppingBag width="20" height="20" fill="white"/>
                </a>
                <a>
                    <Friend width="20" height="20" fill="white"/>
                </a>     
                <a>
                    <Messages width="20" height="20" fill="white"/>
                </a>
                <a>
                    <Notification width="20" height="20" fill="white"/>
                </a>
                <a>
                    <Settings width="20" height="20" fill="white"/>
                </a>
            </StyledMobileNavTopButtomActions>
        </StyledMobileNavTopButtom>
        </>)
}