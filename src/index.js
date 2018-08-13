import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Aux from './hoc/Aux/Aux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const app = (
        <BrowserRouter>
            <Aux>
                <CssBaseline />
                <App />
            </Aux>
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
