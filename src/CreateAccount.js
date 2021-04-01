import React, { useState, useEffect } from 'react';
function CreateAccount(){ 
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        getUser();
    }, []);
    const getUser = () => {
        fetch('http://localhost:9000')
            .then(response => {
                return response.text();
            })
            .then(data => {
                console.log(data)
                setUser(username);
            });
    }
    const createUser = () => {
        fetch('http://localhost:9000/users', {
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
                alert(data);
                getUser();
            });
    }

    const handleSubmit = (ev) => {
        alert('A name was submitted: ' + username);
        createUser()
        ev.preventDefault();
    }

    const handleUserField = (ev) => {
        setUser(ev.target.value)
    }
    const handlePasswordField = (ev) => {
        setPassword(ev.target.value)
    }
    const handleLogin = () => {

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUserField} />
                </label>
                <label>
                    <input type="password" value={password} onChange={handlePasswordField} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br />
        </div>
    );
}

export default CreateAccount;