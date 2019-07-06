import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { blue, grey } from '@material-ui/core/colors';
import AppNavBar from './components/navigation/AppNavBar';
import { Provider } from 'react-redux';
import store from './infrastructure/store';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: grey,
    },
});

const App: React.FC = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <AppNavBar />
                </ThemeProvider>
            </Router>
        </Provider>
    );
};

export default App;
