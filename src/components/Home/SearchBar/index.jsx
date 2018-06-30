import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import RestaurantSearch from './Restaurant'
import OtherSearch from './OtherSearch'
import './index.css'

class SearchBar extends Component {
    constructor (props) {
        super (props)
        this.state = {
            searchByRestaurant: true
        }
    }

    handleClick () {
        this.setState((prevState) => {
            return {searchByRestaurant: !prevState.searchByRestaurant}
        })
    }
    render () {
        return (
            <div className="search-margin-top">
                {
                    this.state.searchByRestaurant ?
                    <RestaurantSearch />
                    : <OtherSearch />
                }
                <Button bsStyle="link" bsClass="link-style btn" onClick={() => this.handleClick()}>
                {
                    this.state.searchByRestaurant ?
                    "Click to Search by Cuisines, Category & Locality"
                    : "Click to Search by Restaurant"
                }
                </Button>
            </div>
        )
    }
}

export default SearchBar