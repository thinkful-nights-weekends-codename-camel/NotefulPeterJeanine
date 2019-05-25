import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    store
  }

  render() {
    return (
      <main role='main' className='App'>
        <h1><a href="/">Noteful</a></h1>
        <div className='content' aria-live='polite'>
          <Sidebar />
          <NoteList />
        </div>
      </main>
    );
  }
}
  

