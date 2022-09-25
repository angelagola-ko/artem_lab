import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth'

function AuthRoute({ compenent: Component, ...rest }){
    const { user } = useContext(AuthContext);

    return (
        <Route 
            {...rest}
            render={props =>
                 user ? <Redirect to="/"/> : <compenent {...props}/>
            }
            />
    )
}

export default AuthRoute;