import React, { useState, useEffect } from 'react';
function App() {
    const [users, setUsers] = useState(false);
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        fetch('http://localhost:9000')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
            });
    }
    function createUser() {
        let name = prompt('Enter users name');
        let email = prompt('Enter users email');
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getUser();
            });
    }
    function deleteUser() {
        let id = prompt('Enter user id');
        fetch(`http://localhost:9000/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getUser();
            });
    }
    return (
        <div>
            {users ? users : 'There is no user data available'}
            <br />
            <button onClick={createUser}>Add user</button>
            <br />
            <button onClick={deleteUser}>Delete user</button>
        </div>
    );
}
export default App;