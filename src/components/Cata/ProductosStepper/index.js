import React from 'react';
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';

import ProductoItemStepper from './ProductoItemStepper';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {
     
    }
});


const ProductosStepper = ({ classes, resultados, respuestasCata, productos, productoActual, 
setFieldValue, handleChangeProductoActual, handlePreviousProducto, handleNextProducto, handleFinCataClick }) => { 
    return (
        <SwipeableViews
            axis={'x'}            
            index={productoActual}
            onChangeIndex={handleChangeProductoActual}   
            className={classes.root}                     
            disabled={!resultados}
            enableMouseEvents={resultados}
            resistance
        >
            {                                
                productos
                    .sort((a, b) => a.orden - b.orden)
                    .map((producto) =>            
                        <ProductoItemStepper 
                            key={producto.orden}
                            resultados={resultados}                            
                            productoActual={productoActual}
                            cantidadProductos={productos.length}
                            producto={producto}
                            respuestasProducto={ 
                                respuestasCata.find( respuestasProducto => respuestasProducto.orden === producto.orden ) 
                            }
                            setFieldValue={setFieldValue}                     
                            handlePreviousProducto={handlePreviousProducto}
                            handleNextProducto={handleNextProducto}       
                            handleChangeProductoActual={handleChangeProductoActual}                        
                            handleFinCataClick={handleFinCataClick}                            
                        />        
                )            
            }
          
        </SwipeableViews>        
    );
};

ProductosStepper.propTypes = {    
    classes: PropTypes.object.isRequired,
    resultados: PropTypes.bool.isRequired,
    respuestasCata: PropTypes.array.isRequired,
    productos: PropTypes.array.isRequired, 
    productoActual: PropTypes.number.isRequired,        
    setFieldValue: PropTypes.func,
    handleChangeProductoActual: PropTypes.func.isRequired,    
    handlePreviousProducto: PropTypes.func.isRequired,
    handleNextProducto: PropTypes.func.isRequired,
    handleFinCataClick: PropTypes.func.isRequired,    
};

export default withStyles(styles)(ProductosStepper);