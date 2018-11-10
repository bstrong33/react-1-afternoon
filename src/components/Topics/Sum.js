import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }
    
    updateSum(num1, num2) {
        // let a = parseInt(num1);
        // let b = parseInt(num2);
        let mySum = num1 + num2;
        this.setState({sum: mySum})
    }
    
    updateNumber1(value) {
        this.setState({number1: parseInt(value)})
    }

    updateNumber2(value) {
        this.setState({number2: parseInt(value)})
    }

    render() {
        return (
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine' type='number'onChange={event => {this.updateNumber1(event.target.value)}}></input>
            <input className='inputLine' type='number'onChange={event => {this.updateNumber2(event.target.value)}}></input>
            <button className='confirmationButton' onClick={()=> {this.updateSum(this.state.number1, this.state.number2)}}>Add</button>
            <span className='resultsBox'>Sum: {this.state.sum}</span>
        </div>
        )
    }
}

export default Sum