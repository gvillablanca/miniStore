import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
//importar elementpos de material-ui
import MainContainer from './container/MainContainer';
import logo from './logo.svg';<---viene por defecto
import './App.css';

//constante con los elementos que mostraremos

class App extends Component {
  render() {
    return (
      //agregamos los elementos de material-ui que queremos que estén en nuestra página
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
