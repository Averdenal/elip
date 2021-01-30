import styled from 'styled-components'

export const StyledFormLogin = styled.div`
    background-color:white;
    border-radius:20px;
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:400px;
        margin:20px;
        input{
            padding:10px;
            margin-top:10px;
            width:80%;
            border-radius:10px;
            border: 1px solid #dedeea;
            outline:none;
            :focus{
                border-color: #615dfa;
            }
        }   
    }
`