import React from 'react';

export default function Note(props) {
    return (
        <li>
            <div>
                <h2><a href={`/note/${props.id}`}>{props.name}</a></h2>
                <button>Delete</button>
                <p>{props.content}</p>
                <div>
                    Modified <span>{props.modified}</span> 
                </div>
            </div>
        </li>
    )
}