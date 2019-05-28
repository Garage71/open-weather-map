import * as React from 'react';
//import { connect } from 'react-redux';
import { Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AddComment, TableChart } from '@material-ui/icons';

interface AppDrawerProps {
    classes: any;
}

interface AppDrawerState {
    value: number;
}

class AppNavBar extends React.Component<AppDrawerProps, AppDrawerState> {
    private routes = [
        { path: '/tasks', title: 'Task list', icon: (): React.ReactElement => <TableChart /> },
        { path: '/addtask', title: 'Add new task', icon: (): React.ReactElement => <AddComment /> },
    ];
    public constructor(props: AppDrawerProps) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    private highlightItem = (route: string, pathname: string): boolean => {
        if (pathname === '/') {
            return route === '/tasks';
        }

        if (pathname === route) {
            return true;
        }

        if (pathname.indexOf(route) === 0) {
            return true;
        }

        return false;
    };

    private handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            value: newValue,
        });
    };

    public render(): React.ReactNode {
        const { classes } = this.props;
        const { value } = this.state;
        const { pathname } = window.location;
        return (
            <div className={classes.drawer}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap={true}>
                            Open Weather Map App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.root}>
                    <Tabs variant="standard" value={value} onChange={this.handleChange} className={classes.tabs}>
                        {this.routes.map(
                            (route, index): React.ReactElement => (
                                <Tab
                                    key={index}
                                    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                        event.preventDefault();
                                    }}
                                    label={route.title}
                                    icon={route.icon()}
                                >
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
                                        >
                                            <ListItemIcon>{route.icon()}</ListItemIcon>
                                            <ListItemText primary={route.title} />
                                        </ListItem>
                                    </NavLink>
                                </Tab>
                            ),
                        )}
                    </Tabs>
                </div>

                {/*
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="top"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        {this.routes.map(
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
                                    >
                                        <ListItemIcon>{route.icon()}</ListItemIcon>
                                        <ListItemText primary={route.title} />
                                    </ListItem>
                                </NavLink>
                            ),
                        )}
                    </List>
                </Drawer>
                            */}
            </div>
        );
    }
}

const drawerHeight = 50;

const styles = (theme: Theme): object => ({
    appBar: {
        // marginLeft: drawerHeight,
        // height: `calc(100% - ${drawerHeight}px)`,
        height: 70,
        // maxWidth: 1280,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: {
        flexShrink: 0,
        height: drawerHeight,
        width: 'auto',
    },
    drawerPaper: {
        height: drawerHeight,
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
});

//export default withRouter(connect(mapStateToProps)(withStyles(styles as any, { withTheme: true })(DrawerWithNavigation as any)) as any);
export default withStyles(styles, { withTheme: true })(AppNavBar);
