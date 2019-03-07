import React from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import PreviousIcon from '@material-ui/icons/ArrowBackIosRounded';
import NextIcon from '@material-ui/icons/ArrowForwardIosRounded';
import EndIcon from '@material-ui/icons/ExitToAppRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({            
    fabNext: {
        position: 'fixed', top: '40vh', zIndex:999,
        right: 4,
        [theme.breakpoints.up('md')]: {            
            right: '10%'
        },
        [theme.breakpoints.up('lg')]: {            
            right: '15%'
        },
    },
    fabPrevious: {
        position: 'fixed', top: '40vh', zIndex:999,
        left: 4,
        [theme.breakpoints.up('md')]: {            
            left: '10%'
        },
        [theme.breakpoints.up('lg')]: {            
            left: '15%'
        },     
    }
});

const productoRespondido = respuestasProducto => {
    if ( (respuestasProducto.omitido === true) || (respuestasProducto.preg1 !== '-1' && respuestasProducto.preg2 !== '-1' && respuestasProducto.preg3 !== '-1' 
    && respuestasProducto.preg4 !== '-1' && respuestasProducto.preg5 !== '-1' && respuestasProducto.preg6 !== '-1' ) ) {
        return true 
    } else { 
        return false
    }
}

const SideNavigation = ({ classes, resultados, productoActual, cantidadProductos, respuestasProducto,
handlePreviousProducto, handleNextProducto, handleFinCataClick}) => {
    return (
        <React.Fragment>
            {
                productoActual > 0 &&
                <Fab 
                    onClick={() => handlePreviousProducto()}
                    color="primary" aria-label="Add" className={classes.fabPrevious}>
                    <PreviousIcon />
                </Fab>
            }
            {
                productoActual < (cantidadProductos - 1) && 
                ( resultados || productoRespondido(respuestasProducto) ) &&
                <Fab
                    onClick={() => handleNextProducto()} 
                    color="primary" aria-label="Add" className={classes.fabNext}>
                    <NextIcon />
                </Fab>            
            }
            {
                productoActual === (cantidadProductos - 1) &&
                ( resultados || productoRespondido(respuestasProducto) ) &&
                <Fab
                    onClick={() => handleFinCataClick()} 
                    color="primary" aria-label="Add" className={classes.fabNext}>
                    <EndIcon />
                </Fab>            
            }            
        </React.Fragment>
    );
};

SideNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
    resultados: PropTypes.bool.isRequired,
    productoActual: PropTypes.number.isRequired,
    cantidadProductos: PropTypes.number.isRequired,
    respuestasProducto: PropTypes.object.isRequired,
    handlePreviousProducto: PropTypes.func.isRequired,
    handleNextProducto: PropTypes.func.isRequired,
    handleFinCataClick: PropTypes.func.isRequired,    
};
export default withStyles(styles)(SideNavigation);