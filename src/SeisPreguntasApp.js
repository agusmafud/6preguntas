import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

import HomeContainer from './containers/HomeContainer';
import ResponderCataContainer from './containers/ResponderCataContainer';
import ResultadosCataContainer from './containers/ResultadosCataContainer';
import CrearCataContainer from './containers/CrearCataContainer';
import CatasUsuarioContainer from './containers/CatasUsuarioContainer';
import AcercaDeContainer from './containers/AcercaDeContainer';


const theme = createMuiTheme({
  palette: {
    primary: {      
      main: '#9c27b0',            
    },
    secondary: {      
      main: '#e040fb',      
    },
    typography: {
      useNextVariants: true,
    },
  },
});

class SeisPreguntasApp
 extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>   
        
        <Helmet>          
          <title>6preguntas App</title>                    
        </Helmet>   
        
        <CssBaseline />
        
        <Switch>                                                 
          <Route exact path="/cata/:id" component={ResponderCataContainer} />
          <Route exact path="/cata/:id/resultados" component={ResultadosCataContainer} />          
          <Route exact path="/crear" component={CrearCataContainer} />
          <Route exact path="/miscatas" component={CatasUsuarioContainer} />
          <Route exact path="/acercade" component={AcercaDeContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>        

      </MuiThemeProvider>
    );
  }
}

export default SeisPreguntasApp;
