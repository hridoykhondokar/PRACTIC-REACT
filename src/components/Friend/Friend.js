import React from 'react';
import './Friend.css';
import {Link, useHistory} from "react-router-dom";

const Friend = (props) => {
    const {name, email, id} = props.user;
     
    const history = useHistory();
     
    const handleClick = (user) => {
         const url = `/users/${user}`;
          history.push(url)
    }

    return (
        <div className='user-main'>
             <h2>Name : {name}</h2>
             <p>Email : {email}</p>
             <br/>
             
             {/* <Link to={`/user/${id}`}> <button>More Details</button> </Link> */}

             <button onClick={() => handleClick(id)}>More Details</button>
        </div>
    );
};

export default Friend;