import React from 'react'
import {StyledBigTopNav,StyledBigTopNavActions,StyledBigTopNavActionsLogo} from "../../elements/stylednav"

export const BigTopNav = () => {
    return(
        <StyledBigTopNav>
            <StyledBigTopNavActions>
                <StyledBigTopNavActionsLogo>
                    <h1>Eliptium</h1>
                </StyledBigTopNavActionsLogo>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <div></div>
                <nav>
                    <li><a>demo</a></li>
                    <li><a>demo</a></li>
                    <li><a>demo</a></li>
                </nav>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <input type="text" placeholder="Recherche" />
                <div className={"input-div"} ></div>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions>
                <p>level <span>45</span></p>
            </StyledBigTopNavActions>
            <StyledBigTopNavActions></StyledBigTopNavActions>
        </StyledBigTopNav>)
}