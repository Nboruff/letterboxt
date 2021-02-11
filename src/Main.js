import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home.js";
import Movies from "./Movies.js";
import Contact from "./Contact.js";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
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
            </HashRouter>
        );
    }
}

export default Main;