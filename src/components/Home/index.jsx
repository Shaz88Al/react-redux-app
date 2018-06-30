import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import ModalCitySelection from './ModalCitySelection'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'
import ModalRestaurantDetails from './ModalRestaurantDetails'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showModal: true
        }
    }

    render () {
        return (
                <div>
                    <Row>
                        <Col lgOffset={3} lg={6}>
                            <SearchBar />
                        </Col>
                    </Row>
                    <Row>
                        <Col lgOffset={2} lg={8}>
                            <ResultPanel />
                        </Col>
                        
                    </Row>
                    <ModalCitySelection />
                    <ModalRestaurantDetails />
                </div>
        )
    }
}

export default Home