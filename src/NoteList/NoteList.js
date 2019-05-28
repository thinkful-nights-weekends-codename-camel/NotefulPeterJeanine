import React, { Component } from 'react';
import Note from '../Note/Note';
// import AddNote from './AddNote/AddNote.js';

export default class NoteList extends Component {
    static defaultProps = {
        notes: [],
    };

    render() {
        return (
          <section>
            <ul aria-live='polite'>
               { this.props.notes.map(note => 
                <Note
                  key={note.id}
                  {...note}
                />
               )}
            </ul>  
          </section>
        );
    }
}