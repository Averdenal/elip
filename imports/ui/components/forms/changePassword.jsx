import React,{useState} from 'react'
import styled, {css} from 'styled-components'



export const FormChangePassword = () => {
    const [pwd, setPwd] = useState({
        oldpassword:"",
        newpassword:"",
        confirmepassword:"",
    })
    const [btnchangement, setBtnChangement] = useState({
        class:""
    })
    const [flash, setFlash] = useState({
        active:false,
        mess:"",
        err:false
    })

    const handleChange = async(e) => {
        const name= e.target.name;
        const value = e.target.value;
        await setPwd((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(pwd.newpassword !== pwd.confirmepassword){
            setBtnChangement(() => ({
                class:"err"
            }))
            setFlash(() => ({
                active:true,
                mess:"Ne coresponds pas!",
                err:true
            }))
        }else{
            setBtnChangement(() => ({
                class:""
            }))
            setFlash(() => ({
                active:true,
                mess:"Changement validé",
                err:false
            }))
            //coplexité PWD
        }
        setTimeout(function(){
            setFlash(() => ({
                active:false,
                mess:""
            }))
        },2000)
        console.log(pwd)
    }

    return (
        <SettingForm onSubmit={handleSubmit}>
            <FlashMess active={flash.active} err={flash.err}>{flash.mess}</FlashMess>
            <input type="password" id="oldPassword" name="oldpassword" placeholder="Old Password" onChange={handleChange} value={pwd.oldPassword} />
            <input type="password" id="NewPassword" name="newpassword" placeholder="New Password" onChange={handleChange} value={pwd.newPassword} />
            <input type="password" id="ConfirmePassword" name="confirmepassword" className={btnchangement.class} placeholder="Confirme Password" onChange={handleChange} value={pwd.confirmepassword} />
            <input type="submit" value="Changer" />
        </SettingForm>
    )
}
const FlashMess = styled.div`
    display:none;
    padding:10px;
    background-color:green;
    color:white;
    font-weight:900;
    text-align:right;
    ${props => props.active && css`
        display:block;
  `}
  ${props => props.err && css`
        display:block;
        background-color:red;
  `}
`

const SettingForm = styled.form`
    display:flex;
    flex-direction:column;
    .err{
        border-color:red;
    }
    label{
        font-size: 12px;
        font-weight:600;
        color: #adafca;
    }
    textarea, input, select{
        outline:none;
        font-weight:900;
        border:1px solid #dedeea;
        border-radius:10px;
        margin-bottom:5px;
        padding:10px;
    }
    input[type="submit"]{
        background-color:#28a745;
        color:white;
        font-size:1.1rem;
        margin:10px 0;
        :disabled{
            background-color:red;
        }
    }
    textarea{
        height:80px;
    }
`