import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonCircle from '@material-ui/icons/Person';

const styles = theme => ({
});

class SenderArea extends Component {

    render() {
        const { from, onChange } = this.props;

        return (
            <TextField
                required
                id="From"
                label="From"
                error={from.error}
                value={from.value}
                onChange={(event)=> onChange('from', event)}
                margin="normal"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonCircle />
                        </InputAdornment>
                    ),
                }}
            />
        )
    }
}

export default withStyles(styles)(SenderArea);