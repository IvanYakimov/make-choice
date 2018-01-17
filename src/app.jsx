import React from 'react';
import ReactDOM from 'react-dom';

import IndectionApp from './components/indecision-app';

// works only with webpack + appropriate loaders
import './styles/styles.scss';

ReactDOM.render(<IndectionApp />, document.querySelector('#app'));
