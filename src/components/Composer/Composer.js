import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Operator from './Operator/Operator';
import SubjectArea from './SubjectArea/SubjectArea';
import SenderArea from './SenderArea/SenderArea';
import RecipientArea from './RecipientArea/RecipientArea';
import TextArea from './TextArea/TextArea';

import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    root: {
        padding: '20px 25px;',
    },
    paper: {
        padding: '20px 25px;',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class Composer extends Component {

    render() {
        const { classes } = this.props;
        const { onHelpOpen, from, to, cc, bcc, subject, text, loading, success, onChange, onSend, onClear, sendDisabled } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="display2" gutterBottom>
                        New  Mail
                        <IconButton aria-label="Help" onClick={onHelpOpen}>
                            <HelpIcon />
                        </IconButton>
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <SenderArea from={from} onChange={onChange} />
                        <RecipientArea to={to} cc={cc} bcc={bcc} onChange={onChange} />
                        <SubjectArea subject={subject} onChange={onChange} />
                        <TextArea text={text} onChange={onChange} />
                    </form>
                    <Operator loading={loading} success={success} onSend={onSend} onClear={onClear} sendDisabled={sendDisabled}/>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Composer);