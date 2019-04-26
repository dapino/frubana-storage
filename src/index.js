import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { createStore } from "redux"
import  Provider from "react-redux/es/components/Provider";
import reducer from "./actions/reducers/index.js"

import './styles/index.css';
import './styles/elements/typo.css';
import './styles/elements/color.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

const appContainer = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , appContainer );
