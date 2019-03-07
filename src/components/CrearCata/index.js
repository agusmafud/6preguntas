import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SideNavigation from './SideNavigation';
import InfoCata from './InfoCata';
import BebidasCata from './BebidasCata';
import Confirmacion from './Confirmacion';

const CrearCata = ({ values, setFieldValue, pasoActual,
handleChangePasoActual, handlePreviousPaso, handleNextPaso, 
handleSumarProducto, handleHomeClick, handleSubmitCataClick }) => {
    return (
        <React.Fragment>

            <Header
                handleHomeClick={handleHomeClick}
                pasoActual={pasoActual}
             />

            <SideNavigation                 
                values={values}
                pasoActual={pasoActual}                
                handlePreviousPaso={handlePreviousPaso}
                handleNextPaso={handleNextPaso}
            />           

            {
                pasoActual === 0 && (
                    <InfoCata 
                        values={values}
                        handleChangePasoActual={handleChangePasoActual}
                    />
                )
            }
            {
                pasoActual === 1 && (
                    <BebidasCata                             
                        values={values}                           
                        handleChangePasoActual={handleChangePasoActual}
                        handleSumarProducto={handleSumarProducto}                        
                        setFieldValue={setFieldValue}                           
                    />
                )
            }
            {
                pasoActual === 2 && (
                    <Confirmacion 
                        values={values}
                        handleSubmitCataClick={handleSubmitCataClick}
                    />
                )
            }    
          
        </React.Fragment>
    );
};

CrearCata.propTypes = {    
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    pasoActual: PropTypes.number.isRequired,        
    handleChangePasoActual: PropTypes.func.isRequired,    
    handlePreviousPaso: PropTypes.func.isRequired,
    handleNextPaso: PropTypes.func.isRequired,
    handleSumarProducto: PropTypes.func.isRequired,    
    handleHomeClick: PropTypes.func.isRequired,
    handleSubmitCataClick: PropTypes.func.isRequired,    
};

export default CrearCata;