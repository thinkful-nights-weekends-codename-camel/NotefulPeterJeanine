import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

export default class NoteListFilter extends Component {
    static defaultProps = {
        notes: [],
        folders: [],
    }
    render() {
        let selectedFolder = this.props.folders.find(folder => 
             folder.id === this.props.match.params.folderId); 
        
        let filteredNotes = this.props.notes.map(note => 
              selectedFolder.id === note.folderId ? <Note key={note.id} {...note} /> : null 
        );

        return (
        <section>
            <ul aria-live='polite'>
                { filteredNotes }
            </ul>  
            <AddNote />
        </section>
        )
    }
}