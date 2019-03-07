import React from 'react';
import PropTypes from 'prop-types';

import VistaAmplia from './VistaAmplia';
import PreguntasList from './PreguntasList';
import Acciones from './Acciones';

import Paper from '@material-ui/core/Paper';

import Zoom from 'react-reveal/Zoom';


import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    paper: {
        width: '95%',
        maxWidth: 800,
        margin: '0 auto',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 4,
        padding: theme.spacing.unit * 3,   
        paddingBottom: theme.spacing.unit * 2,   
        [theme.breakpoints.up('sm')]: {                        
            marginTop: theme.spacing.unit * 4,
            padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 6}px`,  
        },
    },   
});

const ProductosItemStepper = ({ classes, resultados, 
productoActual, cantidadProductos, producto, respuestasProducto, 
setFieldValue, handleChangeProductoActual, handlePreviousProducto, handleNextProducto, handleFinCataClick }) => {
    return (
        <Zoom>
            <Paper className={classes.paper}>
                { 
                    ( resultados || (!respuestasProducto.respondido && !respuestasProducto.omitido) ) &&                    
                        <VistaAmplia
                            resultados={resultados}
                            producto={producto}
                            cantidadProductos={cantidadProductos}                            
                            setFieldValue={setFieldValue}                                                        
                            handleNextProducto={handleNextProducto}
                            handleFinCataClick={handleFinCataClick}
                        />                        
                }                
                
                {
                    ( resultados || (respuestasProducto.respondido && !respuestasProducto.omitido) ) &&
                        
                            <PreguntasList                            
                                resultados={resultados}
                                respuestasProducto={respuestasProducto}                                  
                            />
                        
                }
                            
                { 
                    ( resultados || (respuestasProducto.preg6 !== '-1' || respuestasProducto.omitido)) &&                 
                        <Acciones 
                            resultados={resultados}
                            cantidadProductos={cantidadProductos}
                            respuestasProducto={respuestasProducto}
                            productoActual={productoActual}
                            handlePreviousProducto={handlePreviousProducto}
                            handleNextProducto={handleNextProducto}                            
                            handleFinCataClick={handleFinCataClick}
                        />            
                }     
            </Paper>
        </Zoom>
    );
};

ProductosItemStepper.propTypes = {   
    classes: PropTypes.object.isRequired,
    resultados: PropTypes.bool.isRequired,    
    productoActual: PropTypes.number.isRequired,
    cantidadProductos: PropTypes.number.isRequired,
    producto: PropTypes.object.isRequired,
    respuestasProducto: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func,    
    handleChangeProductoActual: PropTypes.func.isRequired,
    handlePreviousProducto: PropTypes.func.isRequired,
    handleNextProducto: PropTypes.func.isRequired,    
    handleFinCataClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductosItemStepper);