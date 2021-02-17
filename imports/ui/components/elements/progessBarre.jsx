import React from 'react'
import styled, {css} from 'styled-components'

export const ProgressBarre = (props) => {
    return(
        <>
        <ContainerProgressBarre>
            <ContainerProgressBarreEvol pourcent={props.pourcent}></ContainerProgressBarreEvol>
        </ContainerProgressBarre>
        {props.children}
        </>
    )
}

const ContainerProgressBarre = styled.div`
    margin-top:45px;
    position: relative;
    background: #6c757d45;
    width: 100%;
    height: 5px;
    border-radius:5px;
`
const ContainerProgressBarreEvol = styled.div`
    width: 0%;
    ${props => props.pourcent && css`
        width: ${props.pourcent};
    `}
    position: relative;
    background: #007bff;
    height: 5px;
    border-radius:5px;
`