import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import HeadBar from '../../components/Navigation/HeadBar/HeadBar';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <HeadBar/>
                {this.props.children}
            </Aux>
        )
    }
}

export default Layout;