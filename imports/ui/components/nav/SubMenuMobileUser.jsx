import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Meteor} from "meteor/meteor"
import {Login} from "../svg"

export const SubMenuMobileUser = (props) =>{

    const username = Meteor.user().username

    const logout = ()=> {
        Meteor.logout((err)=>{
            console.log(err)
        })
    }

    return(
        <UserZone>
            <UserZoneImg>
                <img src={"./img/avatar/08.jpg"} alt={"Avatar"} />
            </UserZoneImg>
            <UserZoneInfo>{username}</UserZoneInfo>
            <UserZoneLevel>Level 11</UserZoneLevel>
            <UserZoneParam onClick={logout}>
                <Login width="30" height="30" fill="red"/>
            </UserZoneParam>
        </UserZone>
    )
    
}
//STYLE
const UserZone = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(30px, auto);
`
const UserZoneImg = styled.div`
    grid-column: 1;
    grid-row: 1/3;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:50px;
        border-radius:35px;
        border:3px solid white;
        box-shadow:3px 3px 10px #00000080
    }
`
const UserZoneInfo = styled.div`
    grid-column: 2/4;
    grid-row: 1;
    display:flex;
    align-items:flex-end;
    color: #3e3f5e;
    font-weight: 700;
    font-family: Rajdhani,sans-serif;
`
const UserZoneLevel = styled.div`
    grid-column: 2/4;
    grid-row: 2;
    display:flex;

    color: #8f91ac;
    font-size: .75rem;
    font-weight: 500;
    font-family: Rajdhani,sans-serif;
`
const UserZoneParam = styled.button`
    background:transparent;
    border:none;
    outline:none;
    grid-column: 5;
    grid-row: 1/3;
    display:flex;
    align-items:center;
    :hover{
        svg{
            fill: #00c7d9;
        }
    }
`