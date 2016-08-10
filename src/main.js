var React 			= require('react');
var ReactDOM 		= require('react-dom');
var App				= require('./app');


// Entry point of your App
// #app is the DOM id in your HTML code 
// where the reactjs code will be injected
ReactDOM.render(<App />, document.querySelector("#app"));