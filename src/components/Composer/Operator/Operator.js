import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    delete: {
        'padding-left': '10px'
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class Operator extends Component {

    render() {
        const { loading, success, onClear, onSend } = this.props;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });
        
        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Button
                        variant="fab"
                        color="secondary"
                        className={buttonClassname}
                        onClick={onSend}
                    >
                        {success ? <CheckIcon /> : <SendIcon />}
                    </Button>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
                <div className={classes.delete}>
                    {!success &&
                        <IconButton
                            aria-label="Delete"
                            onClick={onClear}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    {success &&
                        <Button
                            color="secondary"
                            onClick={onClear}>
                            Send A New
                    </Button>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Operator);