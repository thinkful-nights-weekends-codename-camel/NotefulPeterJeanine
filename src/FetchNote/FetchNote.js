import React, { Component } from 'react';


export default class App extends Component {
  state = {
   notes: '',
    note: ''
  }

  handleSubmit = (e) => {
   
    e.preventDefault()
    
    
    fetch(`https://noteful-json-server${ this.state.notes }`)
      .then((response) => {
        response.json()
          .then((json) => {
            
            console.log(json)
            this.setState({ result: json })
          })
      })
  }

  handleChange = (e) => {
    this.setState({ notes: e.target.value })
  }

  render() {
    return <div>
     

      <form onSubmit={ this.handleSubmit }>
        <input
          type="text" 
          value={ this.state.folder } 
          required
          onChange={ this.handleChange }
          placeholder="notes"
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
