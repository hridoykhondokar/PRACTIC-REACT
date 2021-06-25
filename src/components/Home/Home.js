import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
   
    const [users, setUsers] = useState([]);

    useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/users`)
         .then(res => res.json())
         .then (data => setUsers(data))
  
    }, []);

    return (
        <div>
            <h1>Friend total : {users.length}</h1>
       {
        users.map(user => <Friend user={user}></Friend>)
       }

       
        </div>
    );
};

export default Home;