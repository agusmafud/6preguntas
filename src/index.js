import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SeisPreguntasApp from './SeisPreguntasApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>    
        <SeisPreguntasApp />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
