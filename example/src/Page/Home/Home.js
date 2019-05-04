import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Grid from "@material-ui/core/es/Grid/index";
import Typography from "@material-ui/core/es/Typography/index";
import Card from "@material-ui/core/es/Card/index";
import CardHeader from "@material-ui/core/es/CardHeader/index";
import CardContent from "@material-ui/core/es/CardContent/index";
import CardActions from "@material-ui/core/es/CardActions/index";
import Button from "@material-ui/core/es/Button/index";

import StarIcon from '@material-ui/icons/StarBorder';
import Header from "./Header";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    heroContent: {
        maxWidth: 900,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
});

class Home extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Header/>
                <main className={classes.layout}>
                    {this.renderHeader()}
                    {this.renderPrice()}
                </main>
            </div>
        );
    }

    renderHeader() {
        const {classes} = this.props;

        return (
            <main className={classes.layout}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Welcome
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        Quickly build an effective pricing table for your potential customers with this layout.
                        It&apos;s built with default Material-UI components with little customization.
                    </Typography>
                </div>
            </main>
        );
    }

    renderPrice() {
        const {classes} = this.props;

        return (
            <main className={classes.layout}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Pricing
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        Quickly build an effective pricing table for your potential customers with this layout.
                        It&apos;s built with default Material-UI components with little customization.
                    </Typography>
                </div>
                <Grid container spacing={40} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={'title'}
                                titleTypographyProps={{align: 'center'}}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        $9.99
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        /mo
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" align="center">
                                    Line description 1
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    Line description 2
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth variant={'text'} color="primary">
                                    Button
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={'title'}
                                subheader={'subheader'}
                                titleTypographyProps={{align: 'center'}}
                                subheaderTypographyProps={{align: 'center'}}
                                action={<StarIcon color={"primary"}/>}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        $9.99
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        /mo
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" align="center">
                                    Line description 1
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    Line description 2
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth variant={'text'} color="primary">
                                    Button
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={'title'}
                                titleTypographyProps={{align: 'center'}}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        $9.99
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        /mo
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" align="center">
                                    Line description 1
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    Line description 2
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button fullWidth variant={'text'} color="primary">
                                    Button
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

export default withStyles(styles)(Home);
