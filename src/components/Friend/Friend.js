import React from 'react';
import './Friend.css';
import {Link} from "react-router-dom";

const Friend = (props) => {
    const {name, email, id} = props.user;
    return (
        <div className='user-main'>
             <h2>Name : {name}</h2>
             <p>Email : {email}</p>
             <br/>
             <Link to={`/user/${id}`}> <button>More Details</button> </Link>
        </div>
    );
};

export default Friend;