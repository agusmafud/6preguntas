import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { Redirect } from 'react-router'
import { Formik, Form } from 'formik';

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

const crearRespuestasCata = productos => {
    return productos.reduce( (acc, producto) => {
        return [ ...acc, {                
            'orden': producto.orden,
            'respondido': false,
            'omitido': false,
            'preg1': '-1',
            'preg2': '-1',
            'preg3': '-1',
            'preg4': '-1',
            'preg5': '-1',
            'preg6': '-1',            
        }]
    }, []);    
}

class ResponderCataContainer extends Component {

    state = {        
        splash: true,        
        productoActual: 0,   
        cataRespondida: false,             
    };
    handleOffSplash = () => {
        this.setState({ splash: false });
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
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
    
    handleFinCataClick = () => {
        this.setState({ cataRespondida: true });
    }
    handleHomeClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>                
                <Helmet>          
                    <title>Respondiendo Cata {this.props.match.params.id}</title>                    
                </Helmet>
                
                {
                    this.state.cataRespondida ? 
                        <Redirect to={`${this.props.match.params.id}/resultados`} />
                    :
                        <Formik
                            initialValues={{
                                respuestasCata: crearRespuestasCata(cata.productos),
                            }}                                        
                                                                
                            onSubmit={(values, { setSubmitting }) => {                                                                                                                                                                                
                                console.log(values);
                                setSubmitting(false);                                                        
                            }}
                        >
                            {({ values, handleSubmit, setFieldValue }) => (
                                <Form>       
                                    <Cata 
                                        resultados={false}                    
                                        cata={cata}
                                        respuestasCata={values.respuestasCata}
                                        splash={this.state.splash}
                                        productoActual={this.state.productoActual}                                                                                                      
                                        handleOffSplash={this.handleOffSplash}
                                        handleChangeProductoActual={this.handleChangeProductoActual}   
                                        handlePreviousProducto={this.handlePreviousProducto}
                                        handleNextProducto={this.handleNextProducto}                 
                                        setFieldValue={setFieldValue}                                                                                     
                                        handleFinCataClick={this.handleFinCataClick}                                
                                        handleHomeClick={this.handleHomeClick}
                                    />                                                             
                                </Form>
                            )}                
                        </Formik> 
                }                              
            </React.Fragment>            
        );
    }
}

ResponderCataContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(ResponderCataContainer);