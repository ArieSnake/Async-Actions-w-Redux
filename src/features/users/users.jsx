import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"
import { useNavigate } from "react-router-dom"

export const Users = () =>{
    const users = useSelector(state => state.accounts)
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)
    const navigate = useNavigate()
    const handleAddUser = () => {
        navigate('/add')
    }
    useEffect(() => {
        dispatch(getUsers())
    },[])

    
    return <>
        <h3>Total users are: {users.length}</h3>
        <p>{status}</p>
        <button onClick={handleAddUser}>Add a new user</button>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.salary}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
}