import React from 'react'
import styled from 'styled-components'
import {ProgressBarre} from '../elements/progessBarre'

export const BadgeCard = (props) => {
    return(
        <StyledBadgeCard>
            <StyledBadgeMinImg src={props.simg}/>
            <StyledBadgeEXP>
                <p><span>+</span>{props.exp} EXP</p>
            </StyledBadgeEXP>
            <img src={props.bimg} />
            <h3>{props.title}</h3>
            <p>{props.mess}</p>
            <ProgressBarre pourcent={props.pourcentage}>{props.pourcentageMess}</ProgressBarre>
        </StyledBadgeCard>
        )
    
}
const StyledBadgeMinImg = styled.img`
    position: absolute;
    top:15px;
    left:15px;
    
`
const StyledBadgeEXP = styled.div`
    background-color:white;
    padding:5px;
    border-radius:10px;
    box-shadow: 5px 5px 10px #00000040;
    position: absolute;
    top:15px;
    right:-15px;
    p{
        font-weight:900!important;
        width:75px!important;
        margin:0!important;
    }
    span{
        color:#00c7d9;
        margin-right:5px;
        font-weight:900;
        font-size:1rem;
    }
`
const StyledBadgeCard = styled.div`
    margin:15px;
    box-shadow: 5px 5px 10px #00000040;
    padding: 32px 28px;
    border-radius: 12px;
    display: flex;
    flex-direction:column;
    align-items: center;
    width:200px;
    height:275px; 
    position: relative;

    h3{
        margin-top: 36px;
        font-size: 1.125rem;
        font-weight: 700;
        text-align: center;
    }
    p{
        width: 180px;
        margin: 16px auto 0;
        color: #3e3f5e;
        font-size: .875rem;
        font-weight: 500;
        line-height: 1.4285714286em;
        text-align: center;
    }    
`