import React, { useState} from 'react'
import {StyledFormLogin} from '../../elements/styledFormLogin'

export const FormLogin = () => {
    return(
        <StyledFormLogin>
            <form>
                <input name="email" type="text" placeholder="email" />
                <input name="password" type="password" placeholder="password" />
                <input type="submit" value="Connexion" />
            </form>
        </StyledFormLogin>
        )
}

export const FormRegister = () => {
    return(
        <StyledFormLogin>
            <form>
                <input name="email" type="text" placeholder="E-Mail" />
                <input name="username" type="text" placeholder="Login" />
                <input name="password" type="password" placeholder="Password" />
                <input type="submit" value="Enregistrement" />
            </form>
        </StyledFormLogin>
        )
}