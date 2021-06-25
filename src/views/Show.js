import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Show() {
    const [users,setUsers] = useState([])

    const getUsers = async() => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')

        setUsers(response.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {
                users.map(user => {
                    return (
                        <Fragment>
                            <Link to={"/index/" + user.id}>{user.name}</Link> <br/>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
