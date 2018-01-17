import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IndectionApp from './components/indecision-app';

// works only with webpack + appropriate loaders
import './styles/styles.scss';

ReactDOM.render(
    <MuiThemeProvider>
        <IndectionApp />
    </MuiThemeProvider>,
    document.querySelector('#app'));
