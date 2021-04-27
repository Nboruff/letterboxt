import React, { Component } from "react";
import themoviedb from "./TMDB_js/themoviedb"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {DropdownButton, Dropdown} from 'react-bootstrap/'
import {List, ListItem, Checkbox} from "@material-ui/core"
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'


let list_of_genres = {
    0  : "Genre",
    28 : "Action",
    12 : "Adventure" ,
    16 : "Animation",
    35 : "Comedy",
    80 : "Crime",
    99 : "Documentary",
    18 : "Drama",
    10751 : "Family",
    14 : "Fantasy",
    36 : "History",
    27 : "Horror",
    10402 : "Music",
    9648 : "Mystery",
    10749 : "Romance",
    878: "Science Fiction",
    10770 : "TV Movie",
    53 : "Thriller",
    10752 : "War",
    37 : "Western"
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
        themoviedb.discover.getMovies(
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
            })
        
    }
    handleSelection = (genre) => {
        this.getGenreMovies(genre);
        this.setState({
            selectValue: genre,
        });
    } 

    handleWatchedCheck = (info) => {
        console.log(info.title);
    }

    render() {
 
        if(this.state.movies.length > 0){

            var movies = this.state.movies.map((value, index, array) =>{
                for(let i = 0; i < array.length; ++i){
                    
                }
                return (
                    <ListItem key={value.id} href={"#/movies/" + value.id}>{value.title}
                        <Checkbox onClick={this.handleWatchedCheck.bind(this,value)} icon={<VisibilityOutlinedIcon/>} checkedIcon={<VisibilityIcon/>}></Checkbox>
                    </ListItem>
                    );
                });
        }
        console.log(this.state.movies);
        return (

            <div className="MoviesByGenre">
                <h2>MOVIES</h2>
                <DropdownButton 
                    alignRight 
                    title={list_of_genres[this.state.selectValue]} 
                    id ="dropdown-menu-align-right"
                    onSelect={this.handleSelection}
                        >
                    {/* <Dropdown.Item eventKey='28'>Action</Dropdown.Item>
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
                    <Dropdown.Item eventKey='37'>Western</Dropdown.Item> */}
                            {Object.keys(list_of_genres).filter(function(key){
                                if(key == '0'){
                                    return false;
                                }
                                return true;
                            }).map(key =>(
                                <Dropdown.Item eventKey={key} key={key}>{list_of_genres[key]}</Dropdown.Item>
                            ))}
                    <Dropdown.Divider />
                </DropdownButton>
                <List>
                    {movies}
                </List>
            </div>
        );
    }
}

export default Movies;
