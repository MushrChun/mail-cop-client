import React, { Component } from 'react';
import Composer from '../../components/Composer/Composer';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { checkValidity, genInitState, alertPreparation } from '../../shared/utility';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import Notification from '../../components/Notification/Notification';
import Aux from '../../hoc/Aux/Aux';

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
        },
        loading: false,
        success: false,
        alertOpen: false,
        alertContent: '',
        notificationOpen: true,
        notificationContent: 'Success'
    }

    onSendHandler = () => {

        // alertPreparation(this.state);

        // this.setState(
        //     {
        //         ...this.state,
        //         alertOpen: true,
        //         alertContent: notification
        //     }
        // );
    }

    onClearHandler = () => {
        this.setState(genInitState());
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

    onAlertCloseHandler = () => {
        this.setState(
            {
                ...this.state,
                alertOpen: false
            }
        );
    }

    onNotificationCloseHandler = () => {
        this.setState(
            {
                ...this.state,
                notificationOpen: false
            }
        );
    }

    render() {
        return (
            <Aux>
                <Composer
                    subject={this.state.subject}
                    to={this.state.to}
                    cc={this.state.cc}
                    bcc={this.state.bcc}
                    text={this.state.text}
                    onChange={this.onChangeHandler}
                    loading={this.state.loading}
                    success={this.state.success}
                    send={this.onSendHandler}
                    clear={this.onClearHandler} />
                <AlertDialog
                    open={this.state.alertOpen}
                    content={this.state.alertContent}
                    close={this.onAlertCloseHandler}
                />
                <Notification 
                    open={this.state.notificationOpen} 
                    onClose={this.onNotificationCloseHandler}
                    content={this.state.notificationContent}/>
            </Aux>
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