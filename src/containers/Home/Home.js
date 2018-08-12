import React, { Component } from 'react';
import Composer from '../../components/Composer/Composer';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { checkValidity } from '../../shared/utility';

class Home extends Component {

    state = {
        subject: {
            value: 'subject',
            error: false
        },
        to: {
            value: 'mushcrhun@gmail.com',
            error: false
        },
        cc: {
            value: '',
            error: false
        },
        bcc: {
            value: '',
            error: false
        },
        text: {
            value: 'blabla',
            error: false
        }
    }

    onChangeHandler = (type, event) => {
        const newValue = event.target.value;
        const newState = {
            ...this.state,
            [type]: {
                value: newValue,
                error: !checkValidity(type, newValue)
            }
        }
        console.log(newState);
        this.setState(newState);
    }

    render() {
        return (
            <Composer
                subject={this.state.subject}
                to={this.state.to}
                cc={this.state.cc}
                bcc={this.state.bcc}
                text={this.state.text}
                onChange={this.onChangeHandler} />
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);