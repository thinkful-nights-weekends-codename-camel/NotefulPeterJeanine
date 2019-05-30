import React, { Component } from 'react';


export default class App extends Component {
  state = {
   folders: '',
    notes: {
      note: []
    }
  }

  handleSubmit = (e) => {
    
    e.preventDefault()
    
    
    fetch(`https://noteful-json-server${ this.state.folder }`)
      .then((response) => {
        response.json()
          .then((json) => {
            
            console.log(json)
            this.setState({ result: json })
          })
      })
  }

  handleChange = (e) => {
    this.setState({ folder: e.target.value })
  }

  render() {
    return <div>

      <form onSubmit={ this.handleSubmit }>
        <input
          type="text" 
          value={ this.state.folder } 
          required
          onChange={ this.handleChange }
          placeholder="folder"
        />

        <input type="submit" />
      </form>

      <div>
        { this.state.result.message.map(function(value) {
          return { value } 
        }) }
      </div>
    </div>
  }
}
