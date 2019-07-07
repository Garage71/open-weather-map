import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CurrentWeatherPresentation } from '../../infrastructure/selectors/presentationContracts';
import { Box, Paper, Table, TableRow, TableCell, Theme, Typography, TableBody } from '@material-ui/core';
import { State } from '../../infrastructure/store/state';
import { currentWeatherView } from '../../infrastructure/selectors';

interface CurrentWeatherProps {
    weather: CurrentWeatherPresentation;
    classes?: any;
}

class CurrentWeather extends React.Component<CurrentWeatherProps> {
    public constructor(props: CurrentWeatherProps) {
        super(props);
    }

    public render() {
        const { classes, weather } = this.props;
        return (
            <Box width="auto">
                <Paper className={classes.container}>
                    <Typography variant={'h6'}>{`Current weather in ${weather.location}`}</Typography>
                    <div className={classes.combinedRow}>
                        <img src={weather.iconUrl} alt={weather.weatherCondition} />
                        &nbsp;
                        <Typography variant={'h6'}>{weather.temperature}</Typography>
                    </div>
                    <Typography variant={'h6'}>{weather.dateTime}</Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Current weather</TableCell>
                                <TableCell>{weather.weatherCondition}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Wind</TableCell>
                                <TableCell>{weather.wind}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cloudiness</TableCell>
                                <TableCell>{weather.cloudiness}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Pressure</TableCell>
                                <TableCell>{weather.pressure}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Humidity</TableCell>
                                <TableCell>{weather.humidity}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunrise</TableCell>
                                <TableCell>{weather.sunrise}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunset</TableCell>
                                <TableCell>{weather.sunset}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Geo coords</TableCell>
                                <TableCell>{weather.geoCoords}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
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

const mapStateToProps = (state: State): CurrentWeatherProps => ({
    weather: currentWeatherView(state),
});

export default connect(mapStateToProps)(withStyles(styles as any, { withTheme: true })(CurrentWeather as any));
