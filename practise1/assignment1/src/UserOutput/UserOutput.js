import React from 'react';
import './UserOutput.css'


const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}> The username is {props.username} </p>
            <p>{props.usernameState}</p>
        </div>
    );
};
export default UserOutput;
