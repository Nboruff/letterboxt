import React, { Component } from "react";

class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            setUsers: "",
            password: ""
        };
    }
    getUser = () => {
        fetch('http://localhost:9000')
            .then(response => {
                return response.text();
            })
            .then(data => {
                this.setState({
                    setUsers: data
                });
            });
    }
    createUser = (username, password) => {
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                this.getUser();
            });
    }

    handleSubmit = (ev) => {
        alert('A name was submitted: ' + this.state.username);
        this.createUser(this.state.username, this.state.password)
        ev.preventDefault();
    }

    handleUserField = (ev) => {
        this.setState({ username: ev.target.value })
    }
    handlePasswordField = (ev) => {
        this.setState({ password: ev.target.value })
    }
    handleLogin = () => {

    }
    componentDidMount() {
        this.getUser()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleUserField} />
                    </label>
                    <label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordField} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>
        )
    }
}

export default CreateAccount;