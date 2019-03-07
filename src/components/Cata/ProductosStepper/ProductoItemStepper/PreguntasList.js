import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import PreguntasListItem from './PreguntasListItem';

const PreguntasList = ({ resultados, respuestasProducto }) => {
    return (
        <React.Fragment>                    
            {
                [...Array(6)].map((e, i) => 
                    <Fade key={i}>
                        <PreguntasListItem                                                             
                            resultados={resultados}
                            numeroPregunta={i + 1}     
                            respuestasProducto={respuestasProducto}                                                                               
                        />             
                    </Fade>
                )        
            }    
        </React.Fragment>
    );
};

PreguntasList.propTypes = {   
    resultados: PropTypes.bool.isRequired,
    respuestasProducto: PropTypes.object.isRequired,        
};

export default PreguntasList;