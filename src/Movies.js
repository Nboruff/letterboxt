import React, { Component } from "react";
import themoviedb from "./TMDB_js/themoviedb"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

themoviedb.common.api_key = "b992795e34345ff9d9aaaaf6f58b75c2"
class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: {},
            selectValue: '' 
        };

    }

    getMovies = () => {
        var self = this

        themoviedb.genres.getMovieList({},
            )
    }

    handleSelection = (genre) => {
        console.log(themoviedb.genres.getMovieList(genre))
        this.setState({
            selectValue: genre
        })
    } 

    render() {
        return (
            <div>
                <h2>MOVIES</h2>
                <p>Movies can go here!</p>
                <DropdownButton 
                    alignRight 
                    title="Genre Dropdown" 
                    id ="dropdown-menu-align-right"
                    onSelect={this.handleSelection}
                        >
                    <Dropdown.Item eventKey="Horror">Horror</Dropdown.Item>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
                    <Dropdown.Divider />
                </DropdownButton>
                <h4>You selected {this.state.selectValue}</h4>
            </div>
        );
    }
}

export default Movies;