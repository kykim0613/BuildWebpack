import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to={"/counter"}>counter</Link>
        </>
    )
}

export default Main;