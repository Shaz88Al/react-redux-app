import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import './index.css';
import TypeAhead from './../../TypeAHead/City'
import { selectedCity, fetchLocation, fetchCuisines, fetchCategory } from './../../../actions/search'
class ModalCitySelection extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showModal: true
        }
    }

    handleClose () {
        this.setState({showModal: false})
    }

    handleClick (selection) {
        const { dispatch } = this.props
        dispatch(selectedCity(selection))
        dispatch(fetchLocation(selection[0].name))
        dispatch(fetchCuisines(selection[0].id))
        dispatch(fetchCategory())
    }

    render () {
        const selectedCity = localStorage.getItem('selectedCity') ? JSON.parse(localStorage.getItem('selectedCity')) : []
        return (
            <Modal show={!this.props.isSelected && this.props.cityPopUp} onHide={this.handleClose} bsSize="large" backdrop="static">
                <Modal.Body>
                    <Row>   
                        <Col lg={selectedCity.length ? 11 : 12} xs={9}>
                            <TypeAhead />
                        </Col>
                        <Col lg={1} hidden={!selectedCity.length} xs={3}>
                            <Button bsStyle="primary" onClick={() => this.handleClick(selectedCity)}> <i className="glyphicon glyphicon-arrow-right"/></Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSelected: state.search.isSelected,
        cityPopUp: state.search.cityPopUp
    }
}

export default connect(mapStateToProps)(ModalCitySelection)