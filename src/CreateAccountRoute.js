import { Route, NavLink, HashRouter, useRouteMatch } from "react-router-dom";
import {useState} from 'react'
import Button from '@material-ui/core/Button'
import CreateAccount from './CreateAccount'
function CreateAccountRoute(){
    let {path, url} = useRouteMatch();
    return(
        
        <div>
            <HashRouter>
            <Button variant="contained" color="primary">
                <NavLink to={`${url}/createaccount`} style={{textDecoration: 'none', color: "white"}}>Create Account</NavLink>
            </Button>
            <div className="content">
                <Route path={`${path}/createaccount`} component={CreateAccount} />
            </div>
        </HashRouter>
        </div>
    );
}

export default CreateAccountRoute;