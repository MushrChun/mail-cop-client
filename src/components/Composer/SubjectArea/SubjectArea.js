import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailCircle from '@material-ui/icons/Mail';

const styles = theme => ({
});

class SubjectArea extends Component {

    render() {
        const { subject, onChange } = this.props;

        return (
            <TextField
                required
                id="Subject"
                label="Subject"
                error={subject.error}
                value={subject.value}
                onChange={(event)=> onChange('subject', event)}
                margin="normal"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailCircle />
                        </InputAdornment>
                    ),
                }}
            />
        )
    }
}

export default withStyles(styles)(SubjectArea);