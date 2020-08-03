import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// import App from './FirstApp';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

ReactDom.render( <CounterApp value={510} />, divRoot );