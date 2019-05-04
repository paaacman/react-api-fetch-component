import React from 'react';
import classNames from 'classnames';
import Menu from "./Menu";
import {withStyles} from "@material-ui/core";
import {Route, withRouter, Switch} from "react-router-dom";
import Profil from "./Profil/Profil";

export const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});

class Dashboard extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <div className={classes.root}>
                <Menu open={open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose}/>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    <Switch>
                        <Route exact path={"/dashboard"} component={Profil}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Dashboard));