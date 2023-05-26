import axios from "axios";
import { useEffect, useState } from "react";
import { createStore } from 'react-redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

const increase = () => ({
    type: INCREASE
}
)
const decrease = () => ({
    type: DECREASE
})

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

const Main = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [getUsers, setGetUsers] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data)
            } catch (e) {
                setError(e)
            }
        }
        fetchUsers();
    }, [])
    console.log(users)
    const handleGetUsers = (e) => {
        e.preventDefault()
        setGetUsers(!getUsers)
    }
    return (
        <>
            <h1>hello world!</h1>
            {/* <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul> */}
            <form onClick={handleGetUsers}>
                <button>불러오기</button>
            </form>
            {getUsers ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.username}({user.name})</li>
                    ))}
                </ul>
            ) : (
                <></>
            )
            }
        </>
    )
}

export default Main;