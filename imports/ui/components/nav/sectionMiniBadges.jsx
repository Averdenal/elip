import React from 'react'
import styled from 'styled-components'

export const SectionMiniBadge = () => {
    return(
        <Section>
            <a>
                <img src={'./img/badge/gold-s.png'} alt={"gold User"} />
            </a>
            <a>
                <img src={'./img/badge/gempost-s.png'} alt={"gold User"} />
            </a>
            <a>
                <img src={'./img/badge/uexp-s.png'} alt={"gold User"} />
            </a>
            <a>
                <img src={'./img/badge/scientist-s.png'} alt={"gold User"} />
            </a>
            <a id={"last"}>
                <img src={'./img/badge/blank-s.png'} alt={"gold User"} />
                <p>+9</p>
            </a>
        </Section>
        )
}
const Section = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: center;
    margin-bottom:40px;
    a{
        width:40px;
        height:40px;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    #last{
        position: relative;
        p{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            font-weight: 600;
            color:white;
        }
    }
    img{
        margin:2px;
        
    }
`