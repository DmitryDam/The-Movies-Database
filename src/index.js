import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root/Root';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('#root');

ReactDOM.render(<Root />, root);

registerServiceWorker();
