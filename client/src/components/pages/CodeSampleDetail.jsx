import React, { Component } from 'react'
import api from '../../api';

export default class CodeSampleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      code: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Code Sample Detail</h1>
        <h2>Name</h2>
        <p>{this.state.name}</p>
        <h2>Code</h2>
        <pre style={{textAlign: 'left', margin: 20}}>{this.state.code}</pre>
        {/* <canvas width="400" height="300" style={{border: '1px solid black'}}></canvas> */}
        <div id="box" style={{border: '1px solid black'}}></div>
      </div>
    )
  }
  componentDidMount() {
    api.getCodeSamples()
      .then(codeSamples => {
        let codeSample = codeSamples.find(cs => cs._id === this.props.match.params.id)
        this.setState({
          name: codeSample.name,
          code: codeSample.code,
        })
        
        eval(codeSample.code)
        
      })
  }
}


/**
var ctx = document.querySelector('canvas').getContext('2d')
ctx.fillRect(50,50,100,100)

 */


