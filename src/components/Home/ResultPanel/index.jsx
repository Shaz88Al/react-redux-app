import React, { Component } from 'react'
import { Row, Col, Badge, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { resetSearch, 
    selectedRestaurant, 
    fetchRestaurantDetails,
    updateSort,
    updateOrder,
    fetchSearchResult
} from './../../../actions/search'
import './index.css'

class ResultPanel extends Component {
    componentWillUnmount () {
        this.props.dispatch(resetSearch())
    }

    showModal (selection) {
        const { dispatch } = this.props
        dispatch(selectedRestaurant([selection]))
        dispatch(fetchRestaurantDetails([selection]))
    }

    getBody () {
       return this.props.searchResult.map((res, index) => {
            return (
                <Row bsClass="row-style row" key={`row-${index}`} onClick={() => this.showModal(res)}>
                    <Col lg={4}>
                        <strong>
                            {res.name}
                        </strong>
                        <div>
                            <small>
                                {res.location.locality}
                            </small>
                        </div>
                    </Col>
                    <Col lg={4} lgOffset={4}>
                        <Badge style={{backgroundColor: `#${res.user_rating.rating_color}`}}>
                            {res.user_rating.aggregate_rating}
                        </Badge>
                        <div>
                            <small>
                                {res.cuisines}
                            </small>
                        </div>
                    </Col>
                </Row>
            )
        })
    }

    handleChange (e) {
        const val = e.target.value
        const { dispatch } = this.props
        if (e.target.name === 'selectSort') {
            dispatch(updateSort(val))
        } else {
            dispatch(updateOrder(val))
        }
        dispatch(fetchSearchResult(this.props.searchObject))
        
    }
    render () {
        if (this.props.searchResult.length === 0) {
            return <div/>
        }
        return (
            <Panel>
                <Panel.Heading>
                    <Row>
                        <Col lg={2}>
                            Search Results
                        </Col>
                        <Col lg={3} lgOffset={4}>
                            <span>
                                Sort By
                            </span>
                            &nbsp;
                            <select name="selectSort" onChange={(e) => this.handleChange(e)}>
                                <option value="cost">
                                    Cost
                                </option>
                                <option  value="rating">
                                    Rating
                                </option>
                                <option  value="real_distance">
                                    Distance
                                </option>
                            </select>
                        </Col>
                        <Col lg={3}>
                            <span>
                                Order
                            </span>
                            &nbsp;
                            <select name="selectOrder" onChange={(e) => this.handleChange(e)}>
                                <option value="asc">
                                    Ascending
                                </option>
                                <option  value="desc">
                                    Descending
                                </option>
                            </select>
                        </Col>
                    </Row>

                </Panel.Heading>
                <Panel.Body>
                    { this.getBody() }
                </Panel.Body>
                <Panel.Footer></Panel.Footer>
            </Panel>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.search.searchResult,
        details: state.search.restaurantDetails,
        searchObject: state.search.searchObject
    }
}

export default connect(mapStateToProps)(ResultPanel)