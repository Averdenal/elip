import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {Meteor} from "meteor/meteor"

export const SubMenuMobileUser = () =>{

    const user = Meteor.user()
    
    const username = () => {
        if(user.profile.profilename != ""){
            d = (user.profile.profilename +" ("+ user.username +")")
        }else{
            d = user.username
        }
        return d
    }

    return(
        <UserZone>
            <UserZoneImg>
                <img src={user.profile.img} alt={"Avatar"} />
            </UserZoneImg>
            <UserZoneInfo>{username()}</UserZoneInfo>
            <UserZoneLevel>Level<span>{user.profile.lvl}</span></UserZoneLevel>
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
    span {
        font-weight:900;
        margin-left:10px;
    }
`
const UserZoneParam = styled.button`
    background:#dc3545;
    border:none;
    outline:none;
    grid-column: 5;
    grid-row: 1;
    display:flex;
    align-items:center;
    width:30px;
    height:30px;
    border-radius:5px;
    justify-content:center;
    :hover{
        svg{
            fill: #00c7d9;
        }
    }
`
const UserZoneParamSetting = styled.button`
    background:#dc3545;
    border:none;
    outline:none;
    grid-column: 5;
    grid-row: 2;
    display:flex;
    align-items:center;
    width:30px;
    height:30px;
    border-radius:5px;
    justify-content:center;
    :hover{
        svg{
            fill: #00c7d9;
        }
    }
`