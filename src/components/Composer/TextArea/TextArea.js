import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

class TextArea extends Component {

    render() {
        const { text, onChange } = this.props;
        
        return (
            <TextField
                required
                id="Text"
                label="Text"
                error={text.error}
                value={text.value}
                onChange={(event)=> onChange('text', event)}
                rows="4"
                margin="normal"
                fullWidth
                multiline
                InputLabelProps={{
                    shrink: true,
                }}/>
        )
    }
}

export default withStyles(styles)(TextArea);