import React, { Component } from "react";
import "./App.css";
import "./Validation/Validation";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    length: 0,
    stringArray: [],
  };
  textChangeHandler = (event) => {
    const txtString = event.target.value;
    const txtLength = txtString.length;
    this.setState({ length: txtLength, stringArray: [...txtString.split("")] });
  };

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.stringArray];
    chars.splice(charIndex, 1);
    this.setState({ stringArray: chars });
  };

  render() {
    let chars = null;

    if (this.state.length > 0) {
      chars = (
        <div>
          {this.state.stringArray.map((char, index) => {
            return (
              <Char letter={char} click={() => this.deleteCharHandler(index)} />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <input
          type="text"
          onChange={(event) => this.textChangeHandler(event)}
        />
        <p>The text above has {this.state.text} letters</p>
        <Validation length={this.state.text} />
        {chars}
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
