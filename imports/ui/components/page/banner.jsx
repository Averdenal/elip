import React from 'react'
import styled from 'styled-components'

export const BannerPage = (props) => {
    return(
        <Banner>
            <img src={props.img} alt={props.alt} />
            <BannerTitle>{props.title}</BannerTitle>
            <BannerText>{props.text}</BannerText>
        </Banner>    
    )
}

const Banner = styled.div`

    margin-top:70px;
    position: relative;
    height: 86px;
    min-height: auto;
    padding: 18px 28px 0 108px;
    border-radius: 12px;
    background: url(./img/banner/banner-bg.png) no-repeat 50%;
    img{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 108%;
    }
`
const BannerText = styled.p`
        color: #fff;
        font-weight: 500;
        margin-left:15px;
`
const BannerTitle = styled.p`
        margin-left:15px;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
`