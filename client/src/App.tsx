import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { blue, grey } from '@material-ui/core/colors';
import AppNavBar from './components/navigation/AppNavBar';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: grey,
    },
});

const App: React.FC = (): React.ReactElement => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <AppNavBar />
            </ThemeProvider>
        </Router>
    );
};

export default App;
