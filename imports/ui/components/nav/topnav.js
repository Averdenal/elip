import React from 'react'
import {StyledBigTopNav,StyledBigTopNavActions,StyledBigTopNavActionsLogo} from "../../elements/stylednav"
import { Facebook,Grid,Dots,ShoppingBag,Friend,Messages,Notification,Settings } from "../../components/svg"

export const BigTopNav = () => {
    return(
        <StyledBigTopNav>
            <StyledBigTopNavActions>
                <StyledBigTopNavActionsLogo>
                    <Facebook width="40" height="40" fill="white"/>
                    <h1>Eliptium</h1>
                </StyledBigTopNavActionsLogo>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <div></div>
                <nav>
                    <li><a><Grid width="22" height="22" fill="white" /></a></li>
                    <li><a>demo</a></li>
                    <li><a>demo</a></li>
                    <li><a>demo</a></li>
                    <li><a><Dots width="14" height="4" fill="white" /></a></li>
                </nav>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <input type="text" placeholder="Recherche" />
                <div className={"input-div"} ></div>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <p>level <span>45</span></p>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <div className={"svg-actions"}>
                    <ShoppingBag width="20" height="20" fill="white"/>
                    <Friend width="20" height="20" fill="white"/>
                    <Messages width="20" height="20" fill="white"/>
                    <Notification width="20" height="20" fill="white"/>
                </div>
                <div className={"svg-actions"}>
                    <Settings width="20" height="20" fill="white"/>
                </div>
            </StyledBigTopNavActions>
        </StyledBigTopNav>)
}