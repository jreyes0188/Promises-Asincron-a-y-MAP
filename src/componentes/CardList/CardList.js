import React, { useState, useEffect } from 'react'
import "./CardList.css"
import CardUser from '../CardUser/CardUser'

const CardList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://api.github.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div className='Cards-List'>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <CardUser data={user}/>
                    </div>
                );
            })}
        </div>
    )
}

export default CardList
