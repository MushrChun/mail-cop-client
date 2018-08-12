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
                id="Text"
                label="Text"
                // value={this.state.name}
                // onChange={this.handleChange('name')}
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