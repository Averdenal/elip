import React, {useState} from "react"
import {StyledPageLogin} from "../elements/styledPageLogin"
import { FormLogin, FormRegister} from "../components/forms/FormLogin"

const PageLogin = () => {
    const [showLogin, setshowLogin] = useState(<FormLogin />)

    const handleActive = (e) =>{
        if(e.target.id == "login"){
            setshowLogin(<FormLogin />)
        }else{
            setshowLogin(<FormRegister />)
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