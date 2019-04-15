import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Storage from "./components/_pages/Storage-page";
import data from './services/data-example'

console.log(data)
const appContainer = document.getElementById('app')

ReactDOM.render(<Storage/>, appContainer );
