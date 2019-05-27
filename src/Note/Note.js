import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
    return (
        <li>
            <div>
                <h2><Link to={`/note/${props.id}`}>{props.name}</Link></h2>
                <button>Delete</button>
                <p>{props.content}</p>
                <div>
                    Modified <span>{props.modified}</span> 
                </div>
            </div>
        </li>
    )
}