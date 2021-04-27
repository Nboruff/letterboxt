import React, {useState, useEffect} from "react";
import { Route, NavLink, HashRouter, useRouteMatch} from "react-router-dom";
import { Alert } from 'react-bootstrap'

function Login(props) {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [is_empty, setIsEmpty] = useState(false)
     
    const getUser = () => {
        fetch('http://localhost:9001/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        });
    }
    // const createUser = (username, password) => {
    //     fetch('http://localhost:9001/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //     })
    //     .then(response => {
    //         return response.text();
    //     })
    //     .then(data => {
    //         alert(data);
    //         this.getUser();
    //     });
    // }

    const checkUser = () => {
        return fetch('http://localhost:9001/users/check', {
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
                console.log(data)
                return data;
            });
    }

    const handleSubmit = async (ev) => {
        var c = checkUser()
        var answer = await c.then((result) => { return result })
        if (!username.trim() || username === "") {
            setIsEmpty(true)
        }
        else if (!password.trim() || password === "") {
            setIsEmpty(true)
        }
        else if (answer === '0') {
            console.log("Username or password did not match records")
        } else {
            console.log("username and password matched")
            setIsEmpty(false)
        }

    }

    const handleUserField = (ev) => {
        setUser(ev.target.value)
    }
    const handlePasswordField = (ev) => {
        setPassword(ev.target.value)
    }
    return (
        <HashRouter>
            <Alert variant="danger" hidden={!is_empty}>Username or Password field is empty. Please fill in all fields</Alert>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUserField}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordField}/>
                    </label>
                    <input type="submit" value="Login"/>
                </form>
                <button onClick={getUser}>Get User</button>
                <br />
            </div>
            <div>
                {/* <CreateAccountRoute/> */}
            </div>
        </HashRouter>
    );
}

export default Login;