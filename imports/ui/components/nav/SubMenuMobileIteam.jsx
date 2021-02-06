import React from 'react'
import styled, {css} from 'styled-components'

export const SubMenuMobileIteam = (props) => {
    return(<>
            <Container active={props.active} href={props.href}>
                {props.children}
                <p>{props.text}</p>
            </Container>

        </>
    )
}

//STYLE
const Container = styled.a`
    text-decoration: none;
    color:black;
    padding: 15px ;
    margin: 10px;
    display:flex;
    align-items: center;
    border-radius:15px;
    p{
        margin-left: 10px;
        font-weight: 700;
    }
    
    ${props => !props.active && css`
    :hover {
        box-shadow: 10px 5px 20px #00000020;
        svg{
            fill: #00c7d9;
        }
        p{
            color:#00c7d9;
            transition: 0.2s ease;
            transform:translateX(15px);
        }
    }
  `}
    ${props => props.active && css`
    background: #00c7d9;
        svg{
            fill: white;
        }
        p{
            color: white;
        }
  `}
    
`

