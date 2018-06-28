import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import { connect } from "react-redux";
import ModalCitySelection from './ModalCitySelection'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showModal: true
        }
    }

    render () {
        return (
            <ModalCitySelection />
        )
    }
}

export default Home