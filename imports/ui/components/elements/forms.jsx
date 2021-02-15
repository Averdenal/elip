import styled, {css} from 'styled-components'

export const SettingForm = styled.form`
    @media (min-width:1024px){
        display:grid;
    }
    display:flex;
    flex-direction:column;
    grid-template-columns: repeat(2, 1fr)
    label{
        font-size: 12px;
        font-weight:600;
        color: #adafca;
    }
    textarea, input, select{
        outline:none;
        font-weight:900;
        border:1px solid #dedeea;
        border-radius:10px;
        margin-bottom:5px;
        padding:10px;
    }
    input[type="submit"]{
        background-color:#28a745;
        grid-column:1/3;
        color:white;
        font-size:1.1rem;
        margin:10px 0;
    }
    textarea{
        height:80px;
    }
`
export const GridCol = styled.form`
    ${props=> css`
        grid-column: ${props.col};
        grid-row: ${props.row};
        padding-right:${props.margin};`
    }
`
export const FlexDiv = styled.div`
    display:flex;
    flex-direction:column;
`