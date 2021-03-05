import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import themoviedb from "./TMDB_js/themoviedb"
import Home from "./Home.js";
import Movies from "./Movies.js";
import Contact from "./Contact.js";
require('dotenv').config()

const TMDB_KEY = process.env.REACT_APP_TMDB_KEY

themoviedb.common.api_key = TMDB_KEY
console.log(TMDB_KEY)

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Letterboxt</h1>
                    <ul className="header">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/home" component={Home}/>
                        <Route path="/movies" component={Movies} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>    
                <div>
                </div>
            </HashRouter>
            
        );
    }
}

export default Main;