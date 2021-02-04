import React from 'react'
import styled from 'styled-components'

export const SubMenuMobileUser = (props) => {
    return(
        <UserZone>
            <UserZoneImg>
                <img src={"./img/avatar/08.jpg"} alt={"Avatar"} />
            </UserZoneImg>
            <UserZoneInfo>Amaury Verdenal</UserZoneInfo>
            <UserZoneLevel>Level 11</UserZoneLevel>
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