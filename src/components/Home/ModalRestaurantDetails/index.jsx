import React, { Component} from 'react'
import { Modal, Row, Col, Badge, Button, ButtonGroup  } from 'react-bootstrap'
import { connect } from "react-redux";
import ModalRestaurantDetailsBody from './ModalRestaurantDetailsBody'

class ModalRestaurantDetails extends Component {
    constructor (props) {
        super(props)
        this.state ={
            showModal: false
        }
    }
    componentWillReceiveProps (nextProps) {
        if ( nextProps.selectedRestaurant.length > 0 ) {
            this.setState({
                showModal: true
            })
        }
    }
    closeModal () {
        this.setState( {
            showModal: false
        })
    }
    render () {
        const details = this.props.details
        const zomatoOrder = details.is_zomato_book_res
        return (
            <Modal show={this.state.showModal} bsSize="large" backdrop="static" >
                <Modal.Header>
                    <Modal.Title>
                        <Row>
                            <Col lg={6}>
                                <strong>{details.name}</strong>
                                <div><small>{details.location ? details.location.locality : ''}</small></div>
                            </Col>
                            <Col lg={2} lgOffset={4}>
                                <div>
                                    { 
                                        details.user_rating ? 
                                        <Badge style={{ backgroundColor: `#${details.user_rating.rating_color}`}}>
                                            { details.user_rating.aggregate_rating }
                                        </Badge> 
                                        : 'Not Ratings Available'
                                    }
                                </div>
                                <div><small> {details.user_rating ? `Based on ${details.user_rating.votes} votes` : 'No Votes Casted'}</small></div>
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalRestaurantDetailsBody details={details}/>
                </Modal.Body>
                <Modal.Footer>
                <ButtonGroup>
                    <Button 
                        bsStyle={zomatoOrder ? 'info' : 'success'} 
                        disabled={zomatoOrder ? true : false}
                    >
                        {zomatoOrder ? 'Online Order Not Available': 'Place Food Order Online'}
                    </Button>
                    <Button bsStyle="warning" onClick={() => this.closeModal()}>Close and Check other Option</Button>
                </ButtonGroup>
                </Modal.Footer>    
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRestaurant: state.search.selectedRestaurant,
        details: state.search.restaurantDetails
    }
}

export default connect(mapStateToProps)(ModalRestaurantDetails)