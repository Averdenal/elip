import styled from 'styled-components'

export const StyledPageLogin = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    height:100vh;
    width:100%;
    background:url("./img/landing/landing-background.jpg") no-repeat fixed;
    .col-page{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:white;
        //font-family: "Titillium Web", sans-serif;
        .infoLoginPage{
            width:80%;
            text-align:center;
            h1{
            font-family: "Titillium Web",sans-serif;
            font-size: 6.5rem;
            font-weight: 900;
            position: relative;
            top: -10px;
            }
            p{
                font-size: 1.1rem;
                line-height: 1.3em;
                font-weight: 500;
            }
            .zonebt{
                margin-top:30px;
                display:flex;
                flex-direction:row;
                justify-content:center;
                .active{
                        background:white;
                        color:black;
                    }
                input{
                    display:none;
                    :checked + label{
                        background:#FFFFFF;
                        color:black;
                    }
                    }
                label{
                    padding: 15px 75px;
                    border:2px solid white;
                    outline:none;
                    background: transparent;
                    color:white;
                    font-size:1.2rem;
                    font-weight: 600;
                    :hover{
                        background:#FFFFFF45;
                        color:black;
                    }
                    
                }
                .btnLogin{
                        border-radius:20px 0 0 20px;
                    }
                .btnRegister{
                    border-radius:0 20px 20px 0;
                }
            }
        }
       
    }
`
