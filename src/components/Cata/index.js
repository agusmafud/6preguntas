import React from 'react';
import PropTypes from 'prop-types';


import Splash from './Splash';
import Progreso from './Progreso';
import SideNavigation from './SideNavigation';
import ProductosStepper from './ProductosStepper';


const Cata = ({ resultados, cata, respuestasCata, productoActual, splash, 
handleOffSplash, handleChangeProductoActual, handlePreviousProducto, handleNextProducto, setFieldValue, 
handleFinCataClick, handleHomeClick }) => {
    return (
        <React.Fragment>
            
            <Splash 
                open={splash}
                handleOffSplash={handleOffSplash}
                nombre={cata.nombre}
                descripcion={cata.descripcion}
                resultados={resultados}
            />
            
            <Progreso 
                resultados={resultados}                
                preguntasOn={ respuestasCata[productoActual].respondido || respuestasCata[productoActual].omitido }                
                productos={cata.productos}                
                productoActual={productoActual}                                
                handleHomeClick={handleHomeClick}                    
            />
            
            <SideNavigation 
                resultados={resultados}
                productoActual={productoActual}
                cantidadProductos={respuestasCata.length}
                respuestasProducto={respuestasCata[productoActual]}
                handlePreviousProducto={handlePreviousProducto}
                handleNextProducto={handleNextProducto}
                handleFinCataClick={handleFinCataClick}
            />           
            
            <ProductosStepper
                resultados={resultados}
                respuestasCata={respuestasCata}
                productos={cata.productos}
                productoActual={productoActual}                
                setFieldValue={setFieldValue}
                handleChangeProductoActual={handleChangeProductoActual}                
                handlePreviousProducto={handlePreviousProducto}
                handleNextProducto={handleNextProducto}                                                
                handleFinCataClick={handleFinCataClick}                                          
            />
        </React.Fragment>
    );
};

Cata.propTypes = {      
    resultados: PropTypes.bool.isRequired,    
    cata: PropTypes.object.isRequired,
    respuestasCata: PropTypes.array.isRequired,
    productoActual: PropTypes.number.isRequired,
    splash: PropTypes.bool,    
    handleOffSplash: PropTypes.func,    
    handleChangeProductoActual: PropTypes.func.isRequired,
    handlePreviousProducto: PropTypes.func.isRequired,
    handleNextProducto: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func,    
    handleFinCataClick: PropTypes.func.isRequired,
    handleHomeClick: PropTypes.func,
};

export default Cata;