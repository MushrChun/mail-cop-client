import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class HelpDialog extends Component {

  render() {
    const { open, onClose } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={onClose}>
          <DialogTitle>Manual</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can send the email to recipents via this app, please make the message meet the following requirements:
            </DialogContentText>
            <DialogContentText>
              - FROM FIELD is compulsory and shoule be a valid email address.
            </DialogContentText>
            <DialogContentText >
              - TO FIELD is compulsory and shoule be an array of valid addresses which can be seperated by ', '. One address is supported as well.
            </DialogContentText>
            <DialogContentText >
              - SUBJECT FIELD is compulsory and shoule be non-empty string.
            </DialogContentText>
            <DialogContentText >
              - CC FIELD is optional or shoule be an array of valid addresses which can be seperated by ', '. One address is supported as well.
            </DialogContentText>
            <DialogContentText >
              - BCC FIELD is optional or shoule be an array of valid addresses which can be seperated by ', '. One address is supported as well.
            </DialogContentText>
            <DialogContentText >
              - Text FIELD is compulsory and shoule be non-empty string.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default HelpDialog;