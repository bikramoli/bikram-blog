import React from 'react';

const url = "https://api.github.com/users"
const FetchApi = () => {
    const [users, setUser] = React.useState([])
    const getUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
        console.log(users);
    }
    React.useEffect(() => {
        getUser();

    }, [])
    return (
        <>
            <button style={{ height: 200 }} onClick={getUser}>clickme</button>
            <h1>Github Users</h1>
            <ul>
                {users.map((user) => {
                    const { login, id, avatar_url, html_url } = user
                    return (
                        <li>
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