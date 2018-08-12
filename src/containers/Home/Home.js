import React, { Component } from 'react';
import Composer from '../../components/Composer/Composer';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Home extends Component {

    render() {
        return (
                <Composer />
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