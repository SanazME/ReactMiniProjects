import React from 'react';

const ValidationComponent = (props) => {
    const textLenght = props.length;
    let textDisplay;

    if (textLenght < 5) {
        textDisplay = "Text is too short"
    } else if (textLenght > 15) {
        textDisplay = "Text is too long"
    } else {
        textDisplay = "Text length is Ok"
    }

    return (
        <div>
            <p>{textDisplay}</p>
        </div>
    );
}

export default ValidationComponent;
