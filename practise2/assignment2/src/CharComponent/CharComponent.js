import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <div>
            <li onClick={props.click}>{props.char}</li>
        </div>
    );
}

export default CharComponent;
