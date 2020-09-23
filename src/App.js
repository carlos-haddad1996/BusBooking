import React from 'react';
import './App.css';

import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import AppRoutes from './routes/appRoutes';
import WrappedComponent from './containers/wrappedComponent';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
