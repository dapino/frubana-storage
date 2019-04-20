import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import data from './services/data-example'
import App from "./components/App";

console.log(data)
const appContainer = document.getElementById('app')

ReactDOM.render(<App/>, appContainer );
