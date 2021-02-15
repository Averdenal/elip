import React, {useState} from "react"
import styled, {css} from 'styled-components'


const MessageFlash = ({err, message}) => {
    return(
        <FlashMess err={err}>{message}</FlashMess>
    )
}

export default MessageFlash

const FlashMess = styled.div`
    transition:0.3s ease-in-out;
    z-index: 10001;
    position:fixed;
    top:50%;
    right:50%;
    display:block;
    padding:10px;
    background-color:green;
    color:white;
    font-weight:900;
    text-align:right;
  ${props => props.err && css`
        background-color:red;
  `}
  ${props => !props.err && css`
        background-color:green;
  `}
`