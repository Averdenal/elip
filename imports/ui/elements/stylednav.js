import Styled from "styled-components"

export const StyledBigTopNav = Styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #615dfa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
`

export const StyledBigTopNavActions = Styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    nav{
        display: flex;
        flex-direction: row;
        li{
            position: relative;
            list-style-type: none;
            display:flex;
            justify-content: center;
            align-items: center;
            a{
                padding: 0 24px;
                display: block;
                color: #fff;
                font-size: .75rem;
                font-weight: 700;
                cursor: pointer;
                transition: color .2s ease-in-out;
                svg{
                    opacity: 0.4;
                    :hover{
                        opacity: 1;
                        transition: 0.3s ease-in-out;
                    }
                }
            }
        }
    }
    .svg-actions{
        padding: 0 15px;
            svg{
                margin: 0 15px;
                opacity: 0.4;
                    :hover{
                        opacity: 1;
                        transition: 0.3s ease-in-out;
                    }
                }
        }
    input{
        padding-right: 60px;
        padding-left:18px;
        border-radius: 10px 0 0 10px;
        outline: none;
        width: 100%;
        height: 52px;
        position: relative;
        border: none;
        background-color: #4e4ac8;
        color: #fff;
    }
    .input-div{
        height: 52px;
        border-radius:0 10px 10px 0;
        background-color: #4e4ac8;
        width:25px;
    }
`
export const StyledBigTopNavActionsLogo = Styled.div`
        display: flex;
        flex-direction: row;
        padding-left:10px;
    h1{
        
        margin-left: 26px;
        color: #fff;
        font-family: Titillium Web,sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        text-transform: uppercase;
    }
`