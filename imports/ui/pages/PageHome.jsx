import React from "react"
import {Redirect} from 'react-router-dom';

const PageHome = (props) => {
    if(!props.user){
        return <Redirect to='/login' />
    }
    return(
        <div>
            <h1>PageHome</h1>
        </div>)
}

export default PageHome