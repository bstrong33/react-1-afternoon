import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  sortEvenAndOdd(value) {
      let arr = value.split(',');
      let allNumbers = [];
      let evens = [];
      let odds = [];
      for (let i= 0; i < arr.length; i++) {
          let int = parseInt(arr[i]);
            allNumbers.push(int);
      }
      arr = [...allNumbers];
      for (let j = 0; j < allNumbers.length; j++ ) {
    if (arr[j] % 2 === 0) {
      evens.push(arr[j])
    } else {
      odds.push(arr[j])
    }
  }
  this.setState({evenArray: evens, oddArray: odds });
}

  handleChange(value) {
      this.setState({
          userInput: value
      })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={ () => {
            this.sortEvenAndOdd(this.state.userInput);
            console.log('hi')
          }}
        >Split</button>
        <span
          className="resultsBox"
        >Evens: { JSON.stringify (this.state.evenArray) }</span>
        <span
          className="resultsBox"
        >Odds: { JSON.stringify (this.state.oddArray) } </span>
      </div>
    );
  }
}

export default EvenAndOdd;
