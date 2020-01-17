import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

export default class App extends Component {
  state = {
    inputText: '',
    inputLength: 0,
    charArray: []
  }

  outputLengthHandler = (event) => {
    const inputText = event.target.value;
    const inputLength = inputText.length;
    const charArray = inputText.split(/\s+/);
    // const charArray = inputText.split('');

    // Update state
    this.setState({
      inputText: inputText,
      inputLength: inputLength,
      charArray: charArray
    })
  }

  deleteCharHandler = (index) => {
    const charArrCopy = [...this.state.charArray];
    charArrCopy.splice(index, 1);
    this.setState({
      charArray: charArrCopy
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

        <div>
          <ul>
            {/* {this.state.inputText.split('').map((char, index) => { */}
            {this.state.charArray.map((char, index) => {
              return (
                <CharComponent
                  char={char}
                  click={() => this.deleteCharHandler(index)}
                />
              )
            })}
            {/* {this.state.inputText.split(/\s+/).map(word => {
              return (
                <CharComponent
                  char={word.trim()}
                />
              )
            })} */}
          </ul>
        </div>
      </div>
    )
  }
}
