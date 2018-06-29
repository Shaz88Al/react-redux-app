import React, { Component } from 'react'
import { AsyncTypeahead, Highlighter} from 'react-bootstrap-typeahead';
import { Row, Col, Badge } from 'react-bootstrap'
import { connect } from "react-redux";
import { selectedRestaurant, fetchRestaurant } from './../../../actions/search'

class TypeAHeadCity extends Component {
    constructor (props) {
        super (props)
        this.state = {
            allowNew: false,
            isLoading: false,
            multiple: false,
            options: [],
        }
    }

    _handleSearch = (query) => {
        this.setState({isLoading: true});
        this.props.dispatch(fetchRestaurant(query))
            .then((options) => {
                this.setState({
                isLoading: false,
                options,
            })
        })
    }

    _renderMenuItemChildren (option, props, index) {
        const ratingColor = `#${option.user_rating.rating_color}`
        const rating = option.user_rating.aggregate_rating
        return (
            <Row key="name">
                <Col lg={4}>
                    <Highlighter key='name' search={props.text}>
                        {option.name}
                    </Highlighter>
                    <div>
                        <small>
                            {option.location.locality}
                        </small>
                    </div>
                </Col>
                <Col lg={4}/>
                <Col lg={4}>
                    <Badge style={{color: ratingColor}}>{rating}</Badge>
                    <div>
                        <small>
                            {option.cuisines}
                        </small>
                    </div>
                </Col>
            </Row>
        )
    }

    handleChange (selection) {
        this.props.dispatch(selectedRestaurant(selection))
    }

    render () {
        
        return (
            <AsyncTypeahead
                {...this.state} 
                onChange={(selection) => this.handleChange(selection)}
                ref='typeaheadRestaurant'
                minLength={3}
                labelKey="name"
                onSearch={this._handleSearch}
                placeholder='Enter Restaurant'
                options={this.state.options}
                selectHintOnEnter={true}
                renderMenuItemChildren={(option, props, index) => this._renderMenuItemChildren(option, props, index)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

export default connect(mapStateToProps)(TypeAHeadCity)