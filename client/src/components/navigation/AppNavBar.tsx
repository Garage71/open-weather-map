import * as React from 'react';

//import { connect } from 'react-redux';
import { Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Cloud, BrightnessMedium, Menu, Satellite } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';

interface AppDrawerProps {
    classes: any;
}

interface AppDrawerState {
    value: number;
    open: boolean;
}

class AppNavBar extends React.Component<AppDrawerProps, AppDrawerState> {
    private routes = [
        { path: '/', title: 'Current weather', icon: (): React.ReactElement => <Cloud /> },
        { path: '/forecast', title: 'Forecast', icon: (): React.ReactElement => <BrightnessMedium /> },
        { path: '/map', title: 'Map', icon: (): React.ReactElement => <Satellite /> },
    ];
    public constructor(props: AppDrawerProps) {
        super(props);
        this.state = {
            value: 0,
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
                <Hidden xsDown implementation="js">
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
            </div>
        );
    }
}

const drawerWidth = 240;

const styles = (theme: Theme): object => ({
    appBar: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: drawerWidth,
        },
        // height: `calc(100% - ${drawerHeight}px)`,
        height: 65,
        // maxWidth: 1280,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
        width: drawerWidth,
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
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
});

//export default withRouter(connect(mapStateToProps)(withStyles(styles as any, { withTheme: true })(DrawerWithNavigation as any)) as any);
export default withStyles(styles, { withTheme: true })(AppNavBar);
