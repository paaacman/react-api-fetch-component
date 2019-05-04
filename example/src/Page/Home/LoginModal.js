import React, {Component} from 'react';
import {Fetch} from "react-api-fetch-component";
import {login, withUser} from "../../User/Hoc";
import Dialog from "@material-ui/core/es/Dialog/index";
import DialogTitle from "@material-ui/core/es/DialogTitle/index";
import DialogContent from "@material-ui/core/es/DialogContent/index";
import DialogContentText from "@material-ui/core/es/DialogContentText/index";
import TextField from "@material-ui/core/es/TextField/index";
import DialogActions from "@material-ui/core/es/DialogActions/index";
import Button from "@material-ui/core/es/Button/index";
import red from "@material-ui/core/es/colors/red";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {withRouter} from "react-router-dom";

const styles = {
    test: {
        color: red.A400,
    }
};

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.refEmail = React.createRef();
        this.refPassword = React.createRef();
    }

    render() {
        const {classes, history} = this.props;

        return (
            <Fetch
                url={'/users/login'}
                method={'POST'}
                manual={true}
                onSuccess={(data) => {
                    login(data.token, data.refresh_token, history, true);
                }}
            >
                {({error, send}) => {
                    return (
                        <Dialog
                            open={this.props.open}
                            onClose={this.props.onClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Login</DialogTitle>
                            <DialogContent>
                                {error && error.message &&
                                <DialogContentText className={classes.test}>
                                    Error : {error.message}
                                </DialogContentText>}
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    inputRef={this.refEmail}
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    inputRef={this.refPassword}
                                    label="Passowrd"
                                    type="password"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.props.onClose} color="primary">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={e => {
                                        e.preventDefault();

                                        send(JSON.stringify({
                                            username: this.refEmail.current.value || '',
                                            password: this.refPassword.current.value || '',
                                        }));
                                    }}
                                    color="primary"
                                >
                                    Login
                                </Button>
                            </DialogActions>
                        </Dialog>
                    );
                }}
            </Fetch>
        );
    }
}

export default withStyles(styles)(withRouter(withUser(LoginModal)));
