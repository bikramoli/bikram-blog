import React, { useState, useEffect } from 'react';

const url = "https://api.github.com/users"
function FetchApi() {

    const [state, setstate] = useState({
        users: [],
        isLoading: false
    })

    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setstate({
            users: users,
            isLoading: true
        })
    }

    useEffect(() => {
        getUser();
    }, [])

    if (!state.isLoading) {
        return <div style={{ textAlign: 'center', margin: '10rem' }}>
            <h1>Loading...</h1>

        </div>
    }
    return (
        <>
            <ul>
                {state.users.map((user) => {
                    const { login, id, avatar_url, html_url } = user
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}></img>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )

                })}</ul>
        </>
    )
}
export default FetchApi