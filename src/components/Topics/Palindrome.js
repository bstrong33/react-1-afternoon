import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    palinChecker(value){
        let str = value;
        let reverse = value;
        reverse = reverse.split('')
        reverse = reverse.reverse()
        reverse = reverse.join('')
        if (str === reverse) {
            this.setState({palindrome: 'True'})
        } else {this.setState({palindrome: 'False'})}
       
    }

    inputChange(value){
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(event) => {this.inputChange(event.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.palinChecker(this.state.userInput)}}>Check</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}

export default Palindrome