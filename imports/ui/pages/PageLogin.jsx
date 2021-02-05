import React, {useState} from "react"
import styled from 'styled-components'
import { FormLogin, FormRegister} from "../components/forms/FormLogin"

const PageLogin = (props) => {
    const [showLogin, setshowLogin] = useState(<FormLogin />)

    const handleActive = (e) =>{
        if(e.target.id == "login"){
            setshowLogin(<FormLogin history={props.history} />)
        }else{
            setshowLogin(<FormRegister history={props.history} />)
        }
    }
    return(
        <StyledPageLogin>
            <div className={"col-page"}>
                <div className={"infoLoginPage"}>
                    <h1>ELiptium</h1>
                    <p>The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!</p>
                    <div className={"zonebt"} >
                        <div>
                            <input type="radio" id={"login"} name="drone" defaultChecked onClick={handleActive}/>
                            <label htmlFor="login" className={"btnLogin"}>Login</label>
                        </div>
                        <div>
                            <input type="radio" id="register" name="drone" onClick={handleActive}/>
                            <label htmlFor="register" className={"btnRegister"}>Register</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"col-page"}>{showLogin}</div>
        </StyledPageLogin>
        )
}

export default PageLogin 

const StyledPageLogin = styled.div`
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
        font-family: "Titillium Web", sans-serif;
        .infoLoginPage{
            width:80%;
            text-align:center;
            h1{
            font-family: "Titillium Web",sans-serif;
            font-size: 4.5rem;
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
                    padding: 15px 40px;
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