import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CurrentWeatherPresentation } from '../../infrastructure/selectors/presentationContracts';
import { CurrentWeather } from '../../infrastructure/store/state';
import { Box, Paper, Theme, Tabs, Tab, Typography } from '@material-ui/core';
import { State, Location, Coords } from '../../infrastructure/store/state';
import { forecastView, forecast24H } from '../../infrastructure/selectors';
import { bindActionCreators, Dispatch } from 'redux';
import * as Actions from '../../infrastructure/actions/actions';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ForecastProps {
    forecast: CurrentWeatherPresentation[];
    forecast24H: CurrentWeather[];
    location: Location;
    classes?: any;
    getForecast?: (coordinates: Coords) => void;
}

interface ForecastState {
    tabStep: number;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box width="auto">{children}</Box>
        </Typography>
    );
};

class Forecast extends React.Component<ForecastProps, ForecastState> {
    public constructor(props: ForecastProps) {
        super(props);
        this.state = {
            tabStep: 0,
        };
    }

    public componentDidMount() {
        const { location, getForecast } = this.props;
        if (location && getForecast) {
            getForecast(location.coordinates);
        }
    }

    private handleTabChange = (event: any, tabStep: number) => {
        this.setState({
            tabStep,
        });
    };

    private a11yProps = (index: number) => {
        return {
            id: `forecast-tab-${index}`,
            'aria-controls': `forecast-tabpanel-${index}`,
        };
    };

    private extractTime = (dateTime: string): string => {
        const time = dateTime.split(' ')[1];
        const splitted = time.split(':');
        return `${splitted[0]}:${splitted[1]}`;
    };
    private twentyFourHoursChart = (forecast: CurrentWeather[], classes: any) => {
        const precicipations = forecast.map(fc => (fc.rain ? fc.rain['3h'] : null));
        const options: Highcharts.Options = {
            title: {
                text: null,
            },
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 400,
                        },
                        chartOptions: {
                            legend: {
                                /*
                                layout: 'proximate',
                                align: 'center',
                                verticalAlign: 'top',
                                */
                                layout: 'vertical',
                                align: 'right',
                                x: 20,
                                verticalAlign: 'top',
                                y: 20,
                                floating: true,
                            },
                        },
                    },
                ],
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical',
            },
            xAxis: {
                categories: forecast.map(fc => this.extractTime(fc.dt_txt)),
            },
            yAxis: [
                {
                    title: null,
                    labels: {
                        format: '{value}°C',
                        style: { color: '#3F51B5' },
                    },
                },
            ],
            series: [
                {
                    type: 'spline',
                    name: 'Temperature, °C',
                    data: forecast.map(fc => fc.main.temp),
                    color: '#3F51B5',
                },
            ],
        };

        if (precicipations.find(p => !!p)) {
            const yaxises = options.yAxis as Highcharts.YAxisOptions[];
            yaxises.push({
                title: null,
                opposite: true,
                labels: {
                    format: '{value} mm',
                    style: { color: '#B9B9B9' },
                },
            });
            options.series.unshift({
                yAxis: 1,
                type: 'column',
                name: 'Precipitation',
                data: forecast.map(fc => (fc.rain && fc.rain['3h'] ? fc.rain['3h'] : null)),
                color: '#B9B9B9',
            });
        }

        return (
            <div className={classes.chart}>
                <HighchartsReact className={classes.chart} highcharts={Highcharts} options={options} />
            </div>
        );
    };

    public render() {
        const { classes, location, forecast24H } = this.props;
        const { tabStep } = this.state;
        return (
            <Box width="auto">
                <Paper className={classes.container}>
                    <Typography
                        className={classes.title}
                        variant={'h6'}
                    >{`Current weather and forecast in your city`}</Typography>
                    <Tabs value={tabStep} onChange={this.handleTabChange} aria-label="weather forecast">
                        <Tab label="Main" {...this.a11yProps(0)} />
                        <Tab label="Daily" {...this.a11yProps(1)} />
                        <Tab label="Hourly" {...this.a11yProps(2)} />
                        <Tab label="Chart" {...this.a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={tabStep} index={0}>
                        <Typography className={classes.title} variant={'h6'}>{`Weather and forecasts in ${
                            location.city
                        }, ${location.country}                        
                    `}</Typography>
                        {this.twentyFourHoursChart(forecast24H, classes)}
                    </TabPanel>
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
    title: {
        textAlign: 'center',
    },
    chart: {
        [theme.breakpoints.up('sm')]: {
            width: 800,
        },
        [theme.breakpoints.down('sm')]: {
            width: 380,
        },
    },
});

const mapStateToProps = (state: State): ForecastProps => ({
    forecast: forecastView(state),
    location: state.location,
    forecast24H: forecast24H(state),
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
