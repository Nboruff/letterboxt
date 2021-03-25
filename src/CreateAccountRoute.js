import { Route, NavLink, HashRouter, useRouteMatch } from "react-router-dom";
import Button from '@material-ui/core/Button'
import CreateAccount from './CreateAccount'
const CreateAccountRoute = (props) => {
    let {path, url} = useRouteMatch();
    return(
        <div>
            <HashRouter>
                <Button variant="contained" color="primary">
                    <NavLink to={`${url}/createaccount`} style={{textDecoration: 'none', color: "white"}}>Create Account</NavLink>
                </Button>
                <Route path={`${path}/createaccount`} component={CreateAccount} />
            </HashRouter>
        </div>
    );
}

export default CreateAccountRoute;