import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Aux from './hoc/Aux/Aux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Aux>
                <CssBaseline />
                <App />
            </Aux>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
