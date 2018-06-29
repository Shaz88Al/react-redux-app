import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restaurant from './Restaurant'
import './index.css'

class SearchBar extends Component {
    render () {
        return (
            <div className="search-margin-top">
                <Restaurant />
            </div>
        )
    }
}

export default SearchBar