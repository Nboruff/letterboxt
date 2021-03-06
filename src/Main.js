import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import themoviedb from "./TMDB_js/themoviedb"
import Home from "./Home.js";
import Movies from "./Movies.js";
import Login from "./Login.js";
import CreateAccount from "./CreateAccount"
require('dotenv').config()


const TMDB_KEY = process.env.REACT_APP_TMDB_KEY

themoviedb.common.api_key = TMDB_KEY

class Main extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
    }

    componentWillMount() {
        this.callAPI();
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Letterboxt</h1>
                    <ul className="header">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/createaccount">Create Account</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/home" component={Home}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/login" component={Login} />
                        <Route path="/createaccount" component={CreateAccount} />
                    </div>
                    <p className="App-intro">;{this.state.apiResponse}</p>
                </div>    
                <div>
                </div>
            </HashRouter>
            
        );
    }
}

export default Main;