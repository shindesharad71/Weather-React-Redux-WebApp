import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={ this.onFormSubmit } className="form-inline">
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