import React, { Component } from 'react';
import api from '../../api';


export default class AddCodeSample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      code: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.code)
    let data = {
      name: this.state.name,
      code: this.state.code,
    }
    api.addCodeSample(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          code: "",
          message: `Your Code Sample '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddCodeSample">
        <h2>Add Code Sample</h2>
        <form>
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
          Code: <textarea value={this.state.code} name="code" cols="30" rows="10" onChange={this.handleInputChange} ></textarea> <br />
          <button onClick={(e) => this.handleClick(e)}>Create Code Sample</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}