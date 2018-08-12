import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

class TextArea extends Component {

    render() {

        const { classes } = this.props;
        return (

            <TextField
                required
                id="Text"
                label="Text"
                error={this.props.text.error}
                value={this.props.text.value}
                onChange={(event)=> this.props.onChange('text', event)}
                rows="4"
                margin="normal"
                fullWidth
                multiline
                InputLabelProps={{
                    shrink: true,
                }}

            />
        )
    }
}

export default withStyles(styles)(TextArea);