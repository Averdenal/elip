import React, { useState} from 'react'
import styled from 'styled-components'
import {Meteor} from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { useHistory } from "react-router-dom";

export const FormLogin = (props) => {
    const [state, setState] = useState({
        email:"",
        password:"",
    })
    let history = useHistory();
    

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState( (prevstate) => ({
            ...prevstate,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Meteor.call("acceptRegister",state.email,function(err,res){
            if(res){
                Meteor.loginWithPassword(res.username,state.password,function(err){
                    if(!err){
                        history.push("/");
                    }
                    
                })
            }
   
        })
    }
    return(
        <Form>
            <form onSubmit={handleSubmit}>
                <input name="email" type="text" placeholder="email" value={state.email} onChange={handleChange}/>
                <input name="password" type="password" placeholder="password" value={state.password} onChange={handleChange}/>
                <input type="submit" value="Connexion" />
            </form>
        </Form>
        )
}

export const FormRegister = () => {
    const [state, setState] = useState({
        email:"",
        username:"",
        password:"",
    })

    const [confirmePassword, setConfirmePassword] = useState('')

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if(name === "confirmePassword"){
            setConfirmePassword(value)
        }else{
            setState( (prevstate) => ({
                ...prevstate,
                [name]:value
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.password !== confirmePassword){
            console.log(state, confirmePassword)
        }else{
            Meteor.call("acceptRegister",state.email,function(err,res){
                if(!err && !res){
                    Accounts.createUser({
                        username:state.username,
                        email:state.email,
                        password:state.password,
                        profile:{
                          role:"ROLE_NOT",
                        }
                      }, function (err){
                          console.log(err)
                      })
                }
            })
        }
    }

    return(
        <Form>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="E-Mail" value={state.email} onChange={handleChange}/>
                <input name="username" type="text" placeholder="Login" value={state.username} onChange={handleChange}/>
                <input name="password" type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
                <input name="confirmePassword" type="password" placeholder="confirmePassword" value={confirmePassword} onChange={handleChange}/>
                <input type="submit" value="Enregistrement" />
            </form>
        </Form>
        )
}

const Form = styled.div`
    background-color:white;
    border-radius:20px;
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:300px;
        margin:20px;
        input{
            padding:10px;
            margin-top:10px;
            width:90%;
            border-radius:10px;
            border: 1px solid #dedeea;
            outline:none;
            :focus{
                border-color: #615dfa;
            }
        }   
    }
`