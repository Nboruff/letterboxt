import React, { useState, useEffect } from 'react';
import {Alert} from 'react-bootstrap'

function CreateAccount(){ 
    const [match, setMatch] = useState(true);
    const [is_empty, setIsEmpty] = useState(false);
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    useEffect(() => {
        getUser();
    }, []);
    const getUser = () => {
        fetch('http://localhost:9001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                console.log(data)
                setUser(username);
            });
    }
    const createUser = () => {
        fetch('http://localhost:9001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(JSON.stringify(data));
                getUser();
            });
    }


    const handleSubmit = (ev) => {
        if(!username.trim() || username === ""){
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
        if(confirm_password !== password){
            setMatch(false)
        } else {
            alert('A name was submitted: ' + username);
            createUser();
            setMatch(true);
            setIsEmpty(false);
        }
        ev.preventDefault();
    }

    const handleUserField = (ev) => {
        setUser(ev.target.value)
    }
    const handlePasswordField = (ev) => {
        setPassword(ev.target.value)
    }
    const handleConfirmPasswordField = (ev) =>{
        setConfirmPassword(ev.target.value)
    }
    return(
        <div>
            <Alert variant="danger" hidden={match}>Your passwords do not match</Alert>
            <Alert variant="danger" hidden={!is_empty}>Username field is empty. Please enter a username</Alert>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUserField} />
                </label>
                    <br/>
                <label>
                    Password: 
                    <input type="password" value={password} onChange={handlePasswordField} />
                </label>
                    <br/>
                <label>
                    Confirm Password:
                    <input type="password" value={confirm_password} onChange={handleConfirmPasswordField} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br />
        </div>
    );
}

export default CreateAccount;