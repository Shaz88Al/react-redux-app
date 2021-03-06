import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import ModalCitySelection from './ModalCitySelection'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'
import ModalRestaurantDetails from './ModalRestaurantDetails'
import './index.css'
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
                    <Row bsClass="home-style row">
                        <Col lgOffset={3} lg={6} xsOffset={2} xs={8}>
                            <SearchBar />
                        </Col>
                    </Row>
                    <Row bsClass="home-result-style row">
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