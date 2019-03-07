import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Cata from '../components/Cata';

import marcus from '../images/marcus.jpg';
import m2 from '../images/m2.jpg';
import sophenia from '../images/sophenia.jpg';

const cata = {
    'id': '1234546',
    'nombre': 'Nombre cata',
    'descripcion': 'Compartí tu opinión sobre las siguientes bebidas. Tus respuestas son anónimas y públicas.',
    'participantes': 100,
    productos: [
        {
            'imagen': marcus,
            'nombre': 'Marcus Reserva Merlot 2013',
            'descripcion': '100% Merlot, 14% de alcohol. Elaborado por la bodega Humberto Canale en la provincia de Río Negro. Barricas nuevas de roble francés y americano por un periodo de 12 meses para luego ser embotellado. Periodo de guarda en botella de 6 meses.',
            'tipo': 'Vino tinto',
            'cepa': 'Merlot',
            'orden': 0,
            'votosCantidad': 90,
            'votosAcumulado': 940, 
        },
        {
            'imagen': m2,
            'nombre': 'Malbec al cuadrado 2016',
            'descripcion': 'Bodega Domingo Molina de Cafayate, Salta. Vino compuesto por dos malbec provenientes de fincas ubicadas en el Valle de Cafayate y en el Valle Rupestre.',
            'tipo': 'Vino tinto',
            'cepa': 'Malbec',
            'orden': 1,
            'votosCantidad': 90,
            'votosAcumulado': 920, 
        },
        {
            'imagen': sophenia,
            'nombre': 'Sophenia Chardonnay 2013',
            'descripcion': 'Región de Origen: Mendoza, Argentina. 25 % del corte es fermentado en barricas francesas donde permanece por 6 meses. Alcohol:13.5%, Azúcar(g/l):3.22, Acidez g/l: 5.5.',            
            'orden': 2,
            'votosCantidad': 90,
            'votosAcumulado': 870, 
        }
    ]
}

const respuestasCata = [
    {                
        'orden': 0,
        'votosCantidad': 90,
        'votosAcumulado': 940, 
        'respondido': true,
        'omitido': false,
        'preg1': 5,
        'acumulado1': 500,
        'preg2': 3,
        'acumulado2': 500,
        'preg3': 2,
        'acumulado3': 500,
        'preg4': 5,
        'acumulado4': 500,
        'preg5': 5,
        'acumulado5': 500,
        'preg6': 0,
        'acumulado6': 500,    
    },
    {                
        'orden': 1,
        'votosCantidad': 90,
        'votosAcumulado': 920, 
        'respondido': true,
        'omitido': false,
        'preg1': 5,
        'acumulado1': 500,
        'preg2': 3,
        'acumulado2': 500,
        'preg3': 2,
        'acumulado3': 500,
        'preg4': 5,
        'acumulado4': 500,
        'preg5': 5,
        'acumulado5': 500,
        'preg6': 0,
        'acumulado6': 500,                        
    },
    {                
        'orden': 2,
        'votosCantidad': 90,
        'votosAcumulado': 870, 
        'respondido': false,
        'omitido': true,
        'preg1': -1,
        'acumulado1': 500,
        'preg2': -1,
        'acumulado2': 500,
        'preg3': -1,
        'acumulado3': 500,
        'preg4': -1,
        'acumulado4': 500,
        'preg5': -1,
        'acumulado5': 500,
        'preg6': -1,
        'acumulado6': 500,                
    }
]

class ResultadosCataContainer extends Component {

    state = {                
        splash: true,  
        productoActual: 0,        
    }; 
    handleOffSplash = () => {
        this.setState({ splash: false });
    }
    handleChangeProductoActual = value => {
        this.setState({ productoActual: value });
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }    
    handlePreviousProducto = () => {
        this.setState((prevState) => ({
            productoActual: prevState.productoActual - 1
        }));        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
    handleNextProducto = () => {
        this.setState((prevState) => ({
            productoActual: prevState.productoActual + 1
        }));        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
    
    handleHomeClick = () => {
        this.props.history.push(`/`);
    }
    handleFinCataClick = () => {
        this.props.history.push(`/`);
    }
    
    
    render() {
        return (
            <React.Fragment>                
                <Helmet>          
                    <title>Respondiendo Cata {this.props.match.params.id}</title>                    
                </Helmet>
                <Cata 
                    resultados           
                    cata={cata}                                        
                    respuestasCata={respuestasCata}
                    splash={this.state.splash}
                    productoActual={this.state.productoActual}
                    handleOffSplash={this.handleOffSplash}
                    handleChangeProductoActual={this.handleChangeProductoActual}  
                    handlePreviousProducto={this.handlePreviousProducto}
                    handleNextProducto={this.handleNextProducto}
                    handleHomeClick={this.handleHomeClick}                 
                    handleFinCataClick={this.handleFinCataClick}                                                                                  
                />
            </React.Fragment>            
        );
    }
}

ResultadosCataContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(ResultadosCataContainer);