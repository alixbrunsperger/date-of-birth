import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Challenge from './challenge';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Challenge />, document.getElementById('root'));
registerServiceWorker();
