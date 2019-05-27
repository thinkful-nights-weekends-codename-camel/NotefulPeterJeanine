import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
import dummyStore from './dummy-store'
import './App.css';

export default class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <Sidebar store={this.state}/>
        </nav>
        <header role='banner'>
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
        </header>
        <main className='content' aria-live='polite'>
          {/* <Route 
            path='/note/:noteId' 
            component={NoteList}
            // render={() => 
            //   <NoteList
            //     store={this.state} 
              // />
            // }
          /> */}
          <NoteList store={this.state}/>
        </main>
      </div>
    );
  }
}


