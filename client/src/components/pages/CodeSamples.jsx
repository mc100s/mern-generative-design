import React, { Component } from 'react';
import api from '../../api';
import {Link} from 'react-router-dom'

export default class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeSamples: []
    }
  }
  render() {
    return (
      <div className="Countries">
        <h2>List of Code Samples</h2>
        {this.state.codeSamples.map(c => <div key={c._id}>
          <Link to={"/code-samples/"+c._id}>
            {c.name}
          </Link>
        </div>)}
      </div>
    );
  }
  componentDidMount() {
    api.getCodeSamples()
      .then(codeSamples => {
        console.log(codeSamples)
        this.setState({
          codeSamples
        })
      })
      .catch(err => console.log(err))
  }
}