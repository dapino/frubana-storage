import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './styles/index.css';
import './styles/elements/typo.css';
import './styles/elements/color.css';

const appContainer = document.getElementById('app')

ReactDOM.render(<App/>, appContainer );
