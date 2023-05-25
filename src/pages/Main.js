import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null)

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
    return (
        <>
            <h1>hello world!</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Main;