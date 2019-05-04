import React from 'react';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/es/Button/Button";
import {withRouter} from "react-router-dom";

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
    },
});

class NotFound extends React.Component {
    render() {
        const {classes, history} = this.props;

        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Typography paragraph>
                        Page introuvable !
                    </Typography>
                    <Button href={"/"}>Retour à l'accueil</Button> - <Button onClick={history.goBack}>Page précédente</Button>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(NotFound));