import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return(
            <form className="form-inline">
                <input 
                    className="form-control col-md-4" 
                    type="text"  
                    placeholder="Search City" 
                    value={ this.state.term }
                    onChange={this.onInputChange}
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        );
    }
}