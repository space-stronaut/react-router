import React,{useState,useEffect,Fragment} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function Index() {
    const [user,setUser] = useState({})

    let match = useParams()

    const getUser = async() => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${match.id}`)
    
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <Fragment key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.website}</p>
            </Fragment>
        </div>
    )
}
