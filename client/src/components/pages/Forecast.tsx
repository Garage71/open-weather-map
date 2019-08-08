import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CurrentWeatherPresentation } from '../../infrastructure/selectors/presentationContracts';
import { Box, Paper, Theme, Typography } from '@material-ui/core';
import { State, Location, Coords } from '../../infrastructure/store/state';
import { forecastView } from '../../infrastructure/selectors';
import { bindActionCreators, Dispatch } from 'redux';
import * as Actions from '../../infrastructure/actions/actions';

interface ForecastProps {
    forecast: CurrentWeatherPresentation[];
    location: Location;
    classes?: any;
    getForecast?: (coordinates: Coords) => void;
}

class Forecast extends React.Component<ForecastProps> {
    public constructor(props: ForecastProps) {
        super(props);
    }

    public componentDidMount() {
        const { location, getForecast } = this.props;
        if (location && getForecast) {
            getForecast(location.coordinates);
        }
    }

    public render() {
        const { classes } = this.props;
        return (
            <Box width="auto">
                <Paper className={classes.container}>
                    <Typography variant={'h6'}>{`Forecast`}</Typography>
                </Paper>
            </Box>
        );
    }
}

const drawerWidth = 240;

const styles = (theme: Theme): object => ({
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
        paddingTop: 20,
        paddingBottom: 40,
        paddingRight: 20,
        width: '100%',
        paddingLeft: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    combinedRow: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
});

const mapStateToProps = (state: State): ForecastProps => ({
    forecast: forecastView(state),
    location: state.location,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            getForecast: Actions.getForecastRequest,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles as any, { withTheme: true })(Forecast as any));
