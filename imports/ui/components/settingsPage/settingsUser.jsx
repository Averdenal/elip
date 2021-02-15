import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {Meteor} from 'meteor/meteor'
import {FormChangePassword} from '../forms/changePassword'
import {UserSettingForm, UserFavoriteForm} from "../forms/userSttingForm"

export const SettingsInfoUser = ()=> {
    const userdata = Meteor.user()

    return(
        <>
        <Settingdiv col={"1"} row={"2/5"}>
        </Settingdiv>
        <Settingdiv col={"2/5"} row={"2"}>
            <UserSettingForm userdata={userdata} />
        </Settingdiv>
        <Settingdiv col={"2/5"} row={"3"}>
            <h3>Change Password</h3>
            <FormChangePassword />
        </Settingdiv>
        <Settingdiv col={"2/5"} row={"4"}>
            <h3>interests</h3>
            <UserFavoriteForm userdata={userdata} />
        </Settingdiv>
        <Settingdiv>
            
        </Settingdiv>
    </>
    )
}

const Settingdiv = styled.div`
    ${props => props.col && css`
        grid-column: ${props.col};
        grid-row: ${props.row};
    `}
    
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
    padding:20px;
    border-radius:10px;
    box-shadow: 5px 5px 10px #00000040;
    h3{
        color : #3e3f5e;
        margin-bottom:20px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1em;
    }`
