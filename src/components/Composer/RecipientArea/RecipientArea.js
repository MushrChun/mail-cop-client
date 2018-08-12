import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import GroupAddCircle from '@material-ui/icons/GroupAdd';
import GroupCircle from '@material-ui/icons/Group';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Aux from '../../../hoc/Aux/Aux';

const styles = theme => ({
});

class RecipientArea extends Component {

    state = {
        showCC: false,
        showBCC: false,
    }

    ccToggleHandler = () => {
        this.setState((prevState) => {
            return { showCC: !prevState.showCC };
        });
    }

    bccToggleHandler = () => {
        this.setState((prevState) => {
            return { showBCC: !prevState.showBCC };
        });
    }

    render() {

        const { classes } = this.props;
        return (
            <Aux>
                <TextField
                    id="To"
                    label="To"
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <GroupCircle />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle CC visibility"
                                    onClick={this.ccToggleHandler}
                                >
                                    <GroupAddCircle />
                                </IconButton>
                                <IconButton
                                    aria-label="Toggle BCC visibility"
                                    onClick={this.bccToggleHandler}
                                >
                                    <VisibilityOff />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                {this.state.showCC &&
                    <TextField
                        id="CC"
                        label="CC"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <GroupAddCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                }
                {
                    this.state.showBCC &&
                    <TextField
                        id="BCC"
                        label="BCC"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VisibilityOff />
                                </InputAdornment>
                            ),
                        }}
                    />
                }
            </Aux>
        )
    }
}

export default withStyles(styles)(RecipientArea);