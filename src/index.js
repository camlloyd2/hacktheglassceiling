import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
);
ReactDOM.render (<App />, document.getElementById ('root'));
registerServiceWorker ();
