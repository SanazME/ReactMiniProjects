import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

export default class App extends Component {
  state = {
    inputText: '',
  }

  inputChangeHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  deleteCharHandler = (index) => {
    const inputText = this.state.inputText;
    const inputArr = inputText.split(/\s+/);
    inputArr.splice(index, 1);
    this.setState({
      inputText: inputArr.join(' ')
    })
    console.log(inputArr.join(''))
  }

  render() {

    let charDisplay;
    charDisplay = (
      <div>
        <ul>
          {this.state.inputText.split(/\s+/).map((char, index) => {
            return (
              <CharComponent
                key={index}
                char={char}
                click={() => this.deleteCharHandler(index)}
              />
            )
          })
          }
        </ul>
      </div>
    )

    return (
      <div className="App" >
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>

        Input Text:
      <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputText} />
        <p>This is user input : {this.state.inputText}</p>

        <ValidationComponent
          length={this.state.inputText.length}
        />
        {charDisplay}

      </div >
    )
  }
}
