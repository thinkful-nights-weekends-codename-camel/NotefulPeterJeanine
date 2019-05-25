import React, { Component } from 'react';
import Note from '../Note/Note';
// import AddNote from './AddNote/AddNote.js';

export default class NoteList extends Component {
    static defaultProps = {
        store: []
    };

    render() {
        // const { notes } = this.props.STORE.notes;
        return (
          <section>
            <ul aria-live='polite'>
               { this.props.store.notes.map(note => 
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