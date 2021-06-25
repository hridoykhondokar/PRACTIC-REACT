import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendsDetails.css';

const FriendsDetails = () => {
    const {userId} = useParams();
    
    const [users, setUsers] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>  setUsers(data))
    }, []);

    const {name , id , phone, website, username} = users;


    return (
        <div className='Details'>
            <br></br>
            <h1>Friend Details</h1>
            <h2>Name : {name}</h2>
            <p>User Name : {username}</p>
            <p>ID : {id}</p>
            <p>Phone : {phone}</p>
            <b>Website : {website}</b>
            <br></br>
            <h1>Thank you for see details</h1>
            <br></br>
        </div>
    );
};

export default FriendsDetails;