import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import TypeAHeadRestaurant from './../../../TypeAHead/Restaurant'

class Restaurant extends Component {
    render () {
        return (
            <div>
                <TypeAHeadRestaurant />
            </div>
        )
    }
}

export default Restaurant