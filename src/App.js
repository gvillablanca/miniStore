import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
//importar elementpos de material-ui
import MainContainer from './container/MainContainer';
import logo from './logo.svg';
import './App.css';

//constante con los elementos que mostraremos
  const style = {
  container: {
    position: 'relative',
  },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
  };

class App extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      //agregamos los elementos de material-ui que queremos que estén en nuestra página
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>  
       <Grid className = "grid">
        <Row>
          <Col lg >
            <AppBar title="Mini Store"/> 
          </Col>
        </Row>
         <Row>
            <Col xs = {4} md= {8} >
            <Row>
              <Col xs>
                <AutoComplete hintText="Busqueda" dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput}/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="CARRO COMPRAS" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="VESTUARIO" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="MUSICA" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="CALZADO" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="LIBROS" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="TECNOLOGIA" primary={true} className = "btn"/>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <RaisedButton label="BELLEZA" primary={true} className = "btn"/>
              </Col>
            </Row>
          </Col>
          <Col xs = {8} md= {4}>
             <div></div>
          </Col>
        </Row>
       </Grid>       
      </MuiThemeProvider>
    );
  }
}

export default App;


//<RefreshIndicator size={50} left={70} top={0} loadingColor="#FF9800" status="loading" style={style.refresh}/>