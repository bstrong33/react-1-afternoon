import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: [{
                name: 'Gimli',
                age: 139,
                weapon: 'Axe',
                home: 'Blue Mountains'

                },
                {
                name: 'Gandalf',
                age: 2019,
                race: 'Wizard',
                colleages:['Radagast', 'Saurman']
                
                },
                {
                name: 'Legolas',
                weapon: 'Bow and Arrow',
                haircolor: 'White'
                },
                {
                name: 'Samwise Gamgee',
                race: 'Hobbit',
                morale: 'High',

                }],
            userInput: '',
            filteredArray: []
        }
    }

    filter(value){
       let holdingArr = [];
      for (let i = 0; i<this.state.unFilteredArray.length; i++) {
        for (let key in this.state.unFilteredArray[i]) {
            if (key === value) {
                holdingArr.push(this.state.unFilteredArray[i])
            }
        }
      } 
      this.setState({
          filteredArray: holdingArr
      }) 
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className='inputLine'
                onChange={event => { this.handleChange(event.target.value)}}></input>
                <button className='confirmationButton' onClick={ () => { this.filter(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject