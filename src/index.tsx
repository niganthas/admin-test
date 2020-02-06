import React from 'react';
import ReactDOM from 'react-dom';
import Backendless from 'backendless';

import App from './components/app';
import './index.css';

Backendless.initApp('66893306-427E-DAD5-FFC4-BE3E1524A600', 'AA6B7036-B2F4-4FC5-A8E9-FE7DA6E9F36B');

ReactDOM.render(<App />, document.getElementById('root'));
