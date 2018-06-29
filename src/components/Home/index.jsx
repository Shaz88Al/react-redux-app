import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import ModalCitySelection from './ModalCitySelection'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'

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
                        <ResultPanel />
                    </Row>
                    <ModalCitySelection />
                </div>
        )
    }
}

export default Home