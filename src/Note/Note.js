import React from 'react';

export default function Note(props) {
    return (
        <li>
            <div>
                <h2>{props.name}</h2>
                <button></button>
                <div>
                    Modified <span>{props.modified}</span> 
                </div>
            </div>
        </li>
    )
}