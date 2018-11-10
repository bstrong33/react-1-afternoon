import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['friend Pete', 'friend Scual', 'friend Weez', 'object basketball', 'object piano', 'action mediation', 'action exercise', 'food sushi', 'food avacado', 'food pineapple'],
            userInput: '',
            filteredArray: []
        }
    }

    filterString(value) {
        let arr = this.state.unFilteredArray.filter(e => {
            return e.includes(value)
        })
        
        this.setState({
            filteredArray: arr
        })
    }

    changeInput(value){
        this.setState({
            userInput: value
        })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className='inputLine' onChange={event => {this.changeInput(event.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.filterString(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString