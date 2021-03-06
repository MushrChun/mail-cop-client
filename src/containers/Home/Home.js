import React, { Component } from 'react';
import Composer from '../../components/Composer/Composer';
import { checkValidity, genInitState, alertPreparation } from '../../shared/utility';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import HelpDialog from '../../components/HelpDialog/HelpDialog';
import Notification from '../../components/Notification/Notification';
import Aux from '../../hoc/Aux/Aux';
import { sendEmail, messageTransform } from '../../shared/api'

class Home extends Component {

    state = genInitState();

    startLoading = () => {
        this.setState({
            ...this.state,
            loading: true
        })
    }

    endLoading = (status) => {
        this.setState({
            ...this.state,
            loading: false,
            success: status
        })
    }

    popNotification = (content) => {
        if(!content) return;
        this.setState(
            {
                ...this.state,
                notificationOpen: true,
                notificationContent: content
            }
        );
    }

    popAlert = (content) => {
        this.setState(
            {
                ...this.state,
                alertOpen: true,
                alertContent: content
            }
        );
    }

    onSendHandler = () => {

        if (!this.state.touched) {
            this.popNotification('Ops! You never write anything!');
            return;
        }

        const alertInfo = alertPreparation(this.state);
        if (!alertInfo.pass) {
            this.popAlert(alertInfo.content);
            return;
        }
        const payload = messageTransform(this.state);
        console.log(payload);
        this.startLoading();
        sendEmail(payload)
            .then((content) => {
                const message = content.data.payload.message;
                this.endLoading(true);
                this.disableSendBtn();
                this.popNotification(message);
            })
            .catch((err) => {
                const message = err.response.data.payload.message;
                this.endLoading(false);
                console.log(err.response);
                this.popNotification(message);
            });
    }

    disableSendBtn = () =>{
        this.setState(
            {
                ...this.state,
                sendDisabled: true
            }
        );
    }

    onClearHandler = () => {
        this.setState(genInitState());
    }

    onChangeHandler = (type, event) => {
        const newValue = event.target.value;
        const newState = {
            ...this.state,
            touched: true,
            [type]: {
                value: newValue,
                error: !checkValidity(type, newValue),
                touched: true
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

    onHelpCloseHandler = () => {
        this.setState(
            {
                ...this.state,
                helpOpen: false
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

    onHelpOpenHandler = () => {
        this.setState(
            {
                ...this.state,
                helpOpen: true
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
                    from={this.state.from}
                    onChange={this.onChangeHandler}
                    loading={this.state.loading}
                    success={this.state.success}
                    onSend={this.onSendHandler}
                    onClear={this.onClearHandler}
                    sendDisabled={this.state.sendDisabled}
                    onHelpOpen={this.onHelpOpenHandler} />
                <AlertDialog
                    open={this.state.alertOpen}
                    content={this.state.alertContent}
                    onClose={this.onAlertCloseHandler} />
                <HelpDialog
                    open={this.state.helpOpen}
                    onClose={this.onHelpCloseHandler} />
                <Notification
                    open={this.state.notificationOpen}
                    onClose={this.onNotificationCloseHandler}
                    content={this.state.notificationContent} />
            </Aux>
        )
    }
}


export default Home;