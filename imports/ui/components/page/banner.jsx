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
    grid-column: 1 / 5;
    grid-row: 1;
    position: relative;
    height: 80px;
    padding: 18px 28px 0 120px;
    border-radius: 12px;
    background: url(./img/banner/banner-bg.png) no-repeat 50%;
    max-width:1184px;
    img{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 105px;
    }
    @media (min-width: 1024px) {
        height: 140px;
        padding: 18px 28px 0 200px;
        img{
            height: 170px;
        }
    }
`
const BannerText = styled.p`
        color: #fff;
        font-weight: 500;
        margin-left:15px;
        @media (min-width: 1024px) {
            font-size: 20px;
        }
`
const BannerTitle = styled.p`
        margin-left:15px;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
        @media (min-width: 1024px) {
            font-size: 2.5rem;
            line-height: 70px;
        }
`