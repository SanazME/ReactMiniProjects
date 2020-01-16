import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'

export default class App extends Component {
  state = {
    inputText: '',
    inputLength: 0
  }

  outputLengthHandler = (event) => {
    const inputText = event.target.value;
    const inputLength = inputText.length;

    // Update state
    this.setState({
      inputText: inputText,
      inputLength: inputLength
    })
  }

  render() {
    return (
      <div>
        Input Text :
        <input type="text" onChange={this.outputLengthHandler} value={this.state.inputText} />
        <h2>The length of the input text is : {this.state.inputLength}</h2>

        <ValidationComponent
          length={this.state.inputLength}
        />
      </div>
    )
  }
}
