import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';
import store from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <Header />
                <Footer />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
