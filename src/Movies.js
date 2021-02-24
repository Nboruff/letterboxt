import React, { Component } from "react";
import themoviedb from "./TMDB_js/themoviedb"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

themoviedb.common.api_key = "b992795e34345ff9d9aaaaf6f58b75c2"
var list_of_genres = {
    '0' : "Genre",
    '28': "Action",
    '12': "Adventure" ,
    '16': "Animation",
    '35': "Comedy",
    '80': "Crime",
    '99': "Documentary",
    '18': "Drama",
    '10751' : "Family",
    '14' : "Fantasy",
     '36' : "History",
    '27' : "Horror",
    '10402' : "Music",
    '9648' : "Mystery",
    '10749' : "Romance",
    '878': "Science Fiction",
    '10770' : "TV Movie",
    '53' : "Thriller",
    '10752' : "War",
    '37' : "Western"
}

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            selectValue: '0' 
        };

    }

    getGenreMovies = (genre) => {
        var self = this
        console.log(themoviedb.discover.getMovies(
            {
                sort_by: 'popularity.desc',
                with_genres: genre
            },
            function (movies) {
                movies = JSON.parse(movies)
                self.setState({
                    movies: movies.results
                })
                
                //console.log(movies)
            },
            function (error) {
                // do something with errorCallback
                console.error(error)
            }))
        
    }
    handleSelection = (genre) => {
        this.getGenreMovies(genre)
        this.setState({
            selectValue: genre,
        })
    } 

    render() {
        if(this.state.movies.length > 0){

            var movies = this.state.movies.map((value, index, array) =>{
                return (
                    <ListGroupItem key={value.id} href={"#/movies/" + value.id}>{value.title}</ListGroupItem>
                    )
                })
        }
        console.log(this.state.movies)
        return (
            <div className="MoviesByGenre">
                <h2>MOVIES</h2>
                <DropdownButton 
                    alignRight 
                    title={list_of_genres[this.state.selectValue]} 
                    id ="dropdown-menu-align-right"
                    onSelect={this.handleSelection}
                        >
                    <Dropdown.Item eventKey='28'>Action</Dropdown.Item>
                    <Dropdown.Item eventKey='12'>Adventure</Dropdown.Item>
                    <Dropdown.Item eventKey='16'>Animation</Dropdown.Item>
                    <Dropdown.Item eventKey='35'>Comedy</Dropdown.Item>
                    <Dropdown.Item eventKey='80'>Crime</Dropdown.Item>
                    <Dropdown.Item eventKey='99'>Documentary</Dropdown.Item>
                    <Dropdown.Item eventKey='18'>Drama</Dropdown.Item>
                    <Dropdown.Item eventKey='10751'>Family</Dropdown.Item>
                    <Dropdown.Item eventKey='14'>Fantasy</Dropdown.Item>
                    <Dropdown.Item eventKey='36'>History</Dropdown.Item>
                    <Dropdown.Item eventKey='27'>Horror</Dropdown.Item>
                    <Dropdown.Item eventKey='10402'>Music</Dropdown.Item>
                    <Dropdown.Item eventKey='9648'>Mystery</Dropdown.Item>
                    <Dropdown.Item eventKey='10749'>Romance</Dropdown.Item>
                    <Dropdown.Item eventKey='878'>Science Fiction</Dropdown.Item>
                    <Dropdown.Item eventKey='10770'>TV Movie</Dropdown.Item>
                    <Dropdown.Item eventKey='53'>Thriller</Dropdown.Item>
                    <Dropdown.Item eventKey='10752'>Drama</Dropdown.Item>
                    <Dropdown.Item eventKey='37'>Western</Dropdown.Item>
                    <Dropdown.Divider />
                </DropdownButton>
                <ListGroup>
                    {movies}
                </ListGroup>
            </div>
        );
    }
}

export default Movies;


/** MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37
 */