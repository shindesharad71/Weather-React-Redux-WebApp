import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return(
            <form className="form-inline">
                <input className="form-control col-md-4" type="text" aria-label="Search" placeholder="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        );
    }
}