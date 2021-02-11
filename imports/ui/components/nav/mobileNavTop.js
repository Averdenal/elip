import React, {useState} from 'react'
import styled from 'styled-components'
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
            </StyledMobileNavTopButtomActions>
        </StyledMobileNavTopButtom>
        </>)
}

export const StyledMobileNavTop = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #615dfa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
`

export const StyledMobileNavTopLogo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    padding: 0 25px;
    h1{
        margin-left:25px;
        color: white;
        font-size:1.2rem
    }
`

export const StyledMobileNavTopAction = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    padding: 0 25px;
    a{
        display: flex;
        justify-content:center;
        align-items: center;
        svg{
            opacity: 0.4;
            :hover{
                opacity: 1;
            }
        }
    }
    
`

export const StyledMobileNavTopButtom = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #615dfa;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
`
export const StyledMobileNavTopButtomActions = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    a{
        svg{
            opacity: 0.4;
            :hover{
                opacity:1;
                }
        }
    }
`