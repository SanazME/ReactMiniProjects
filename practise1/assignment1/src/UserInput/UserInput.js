import React from 'react'

export default function UserInput(props) {
    const style = {
        border: '2px solid red'
    }
    return (
        <div className="UserInput">
            <input
                type="text"
                style={style}
                onChange={props.changed}
                value={props.currentName} />
        </div>
    )
}

