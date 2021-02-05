import React from "react"
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import {MobileNavTop} from "../components/nav/mobileNavTop"

const PageHome = () => {
    const user = Meteor.userId()

    if(!user){
       return <Redirect to='/login' />
    }


    return(
        <div>
            <MobileNavTop />
        </div>
    )
}

export default PageHome

export const StyledHomePage = styled.div `
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    height: min(100vh);
`;