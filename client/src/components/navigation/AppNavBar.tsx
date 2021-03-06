import * as React from 'react';
import { connect } from 'react-redux';
import { Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Cloud, BrightnessMedium, Menu, Satellite } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import { Route, withRouter } from 'react-router-dom';
import { State } from '../../infrastructure/store/state';
import { bindActionCreators, Dispatch } from 'redux';
import * as Actions from '../../infrastructure/actions/actions';
import CurrentWeather from '../pages/CurrentWeather';
import Forecast from '../pages/Forecast';

interface AppNavBarProps {
    classes?: any;
    city: string;
    country: string;
    getCoordinates?: () => void;
}

interface AppNavBarState {
    open: boolean;
}

class AppNavBar extends React.Component<AppNavBarProps, AppNavBarState> {
    private routes = [
        { path: '/', title: 'Current weather', icon: (): React.ReactElement => <Cloud /> },
        { path: '/forecast', title: 'Forecast', icon: (): React.ReactElement => <BrightnessMedium /> },
        { path: '/map', title: 'Map', icon: (): React.ReactElement => <Satellite /> },
    ];
    public constructor(props: AppNavBarProps) {
        super(props);
        this.state = {
            open: false,
        };
    }
    private highlightItem = (route: string, pathname: string): boolean => {
        if (pathname === route) {
            return true;
        }
        return false;
    };

    private handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    public componentDidMount() {
        if (this.props.getCoordinates) {
            this.props.getCoordinates();
        }
    }

    private drawerItems = (classes: any, routes: any[], pathname: string) => (
        <React.Fragment>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {routes.map(
                    (route, index): React.ReactElement => (
                        <NavLink
                            key={index}
                            exact={true}
                            activeClassName={classes.current}
                            className={classes.link}
                            to={route.path}
                        >
                            <ListItem
                                button={true}
                                key={route.title}
                                selected={this.highlightItem(route.path, pathname)}
                                onClick={this.handleDrawerToggle}
                            >
                                <ListItemIcon>{route.icon()}</ListItemIcon>
                                <ListItemText primary={route.title} />
                            </ListItem>
                        </NavLink>
                    ),
                )}
            </List>
        </React.Fragment>
    );

    public render(): React.ReactNode {
        const { classes } = this.props;
        const { pathname } = window.location;
        const { open } = this.state;
        return (
            <div className={classes.drawer}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap={true}>
                            Open Weather Map App
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Hidden smUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={'left'}
                        open={open}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {this.drawerItems(classes, this.routes, pathname)}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="js">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {this.drawerItems(classes, this.routes, pathname)}
                    </Drawer>
                </Hidden>
                <Box width="100%">
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Route path="/" exact={true} component={CurrentWeather} />
                        <Route path="/forecast" exact={true} component={Forecast} />
                    </main>
                </Box>
            </div>
        );
    }
}

const drawerWidth = 240;

const styles = (theme: Theme): object => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: drawerWidth,
        },
        height: 65,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
        width: 'auto',
        height: 'auto',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    toolbar: theme.mixins.toolbar,
    link: {
        textDecoration: 'none',
    },
    tabs: {
        paddingTop: 70,
        flexDirection: 'row',
    },
    navIconHide: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
});

const mapStateToProps = (state: State): AppNavBarProps => ({
    city: state.location.city,
    country: state.location.country,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            getCoordinates: Actions.getCoordinates,
        },
        dispatch,
    );

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles as any, { withTheme: true })(AppNavBar as any)) as any);
