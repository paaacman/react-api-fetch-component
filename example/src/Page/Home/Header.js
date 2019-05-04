import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withUser} from "../../User/Hoc";
import AppBar from "@material-ui/core/es/AppBar/index";
import Toolbar from "@material-ui/core/es/Toolbar/index";
import Typography from "@material-ui/core/es/Typography/index";
import Button from "@material-ui/core/es/Button/index";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Link} from "react-router-dom";
import UserLogin from "./LoginModal";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    },
});

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalLoginOpen: false,
        }
    }

    render() {
        const {user, classes} = this.props;

        return (
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link to={'/'}>home</Link>
                    </Typography>
                    <Button>Features</Button>
                    <Button>Enterprise</Button>
                    <Button>Support</Button>
                    {(!user || (!user.email && !user.username)) &&
                    <div>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => this.setState({modalLoginOpen: true})}
                        >
                            Login
                        </Button>
                        <UserLogin
                            open={this.state.modalLoginOpen}
                            onClose={() => this.setState({modalLoginOpen: false})}
                        />
                    </div>
                    }
                    {(user && (user.email || user.username)) &&
                    <div>
                        <Button href="/dashboard" color="primary" variant="outlined">
                            Dashboard
                        </Button>
                        <Button>X</Button>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withUser(withStyles(styles)(Header));
