import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Operator from './Operator/Operator';
import SubjectArea from './SubjectArea/SubjectArea';
import RecipientArea from './RecipientArea/RecipientArea';
import TextArea from './TextArea/TextArea';

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
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="display2" gutterBottom>
                        New  Mail
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <SubjectArea />
                        <RecipientArea />
                        <TextArea />
                    </form>
                    <Operator />
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Composer);