import React from 'react';
import PropTypes from 'prop-types';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import EndIcon from '@material-ui/icons/ExitToAppRounded';

const Header = ({ handleHomeClick, pasoActual }) => {
    return (

        <AppBar position='static' color="primary">
            
            <Toolbar>
                <IconButton 
                    onClick={() => handleHomeClick()}
                    color="inherit" aria-label="Menú de opciones"
                    style={{transform: 'rotate(180deg)'}}
                >
                    <EndIcon />
                </IconButton>
                <Typography variant="h6" color='inherit'>
                    Creá tu cata virtual
                </Typography>                
            </Toolbar>   
            
            
            <Stepper activeStep={pasoActual} style={{height:72}}>                    
                <Step key={0}>
                    <StepLabel>Info de cata</StepLabel>
                </Step>
                <Step key={1}>
                    <StepLabel>Bebidas a catar</StepLabel>
                </Step>
                <Step key={2}>
                    <StepLabel>Compartir</StepLabel>
                </Step>
            </Stepper>                  
    
        </AppBar>
    );
};

Header.propTypes = {
    handleHomeClick: PropTypes.func.isRequired,
    pasoActual: PropTypes.number.isRequired,
};

export default Header;