import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { Formik, Form } from 'formik';

import CrearCata from '../components/CrearCata';

class CrearCataContainer extends Component {

    state = {                
        pasoActual: 0,              
    };    
    handleChangePasoActual = value => {
        this.setState({ pasoActual: value });
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }     
    handlePreviousPaso = () => {
        this.setState((prevState) => ({
            pasoActual: prevState.pasoActual - 1
        }));        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
    handleNextPaso = () => {
        this.setState((prevState) => ({
            pasoActual: prevState.pasoActual + 1
        }));        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
    

    handleSumarProducto = (totalProductos, setFieldValue) => {
        if (totalProductos < 5) {
            setFieldValue(`productos[${totalProductos}].imagen`, '');
            setFieldValue(`productos[${totalProductos}].imagenEditada`, false);
            setFieldValue(`productos[${totalProductos}].nombre`, '');
            setFieldValue(`productos[${totalProductos}].descripcion`, '');
            setFieldValue(`productos[${totalProductos}].tipo`, '');
            setFieldValue(`productos[${totalProductos}].cepa`, '');
            setFieldValue(`productos[${totalProductos}].orden`, totalProductos);
            setFieldValue(`productos[${totalProductos}].votosCantidad`, 0);
            setFieldValue(`productos[${totalProductos}].votosAcumulado`, 0);            
        }   
    } 

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    handleHomeClick = () => {
        this.props.history.push('/');
    }
    handleSubmitCataClick = () => {
        this.props.history.push('/');
    }    

    render() {
        return (
            <React.Fragment>                
                <Helmet>          
                    <title>Creando nueva cata</title>                    
                </Helmet>

                <Formik
                    initialValues={{
                        'id': '',
                        'nombre': '',
                        'descripcion': '',
                        'participantes': 0,
                        productos: [
                            {
                                'imagen': '',
                                'imagenEditada': false,                                
                                'nombre': '',
                                'descripcion': '',
                                'tipo': '',
                                'cepa': '',
                                'orden': 0,
                                'votosCantidad': 0,
                                'votosAcumulado': 0, 
                            },
                        ],                        
                    }}                                        
                                                        
                    onSubmit={(values, { setSubmitting }) => {                                                                                                                                                                                
                        console.log(values);
                        setSubmitting(false);                                                        
                    }}
                >
                    {({ values, handleSubmit, setFieldValue, onSubmit }) => (
                        <Form>       
                            <CrearCata
                                values={values}
                                setFieldValue={setFieldValue}
                                pasoActual={this.state.pasoActual}                                
                                handleChangePasoActual={this.handleChangePasoActual}   
                                handlePreviousPaso={this.handlePreviousPaso}
                                handleNextPaso={this.handleNextPaso}
                                handleSumarProducto={ () =>
                                    this.handleSumarProducto(values.productos.length, setFieldValue)
                                }                                                                                        
                                handleHomeClick={this.handleHomeClick}
                                handleSubmitCataClick={this.handleSubmitCataClick}                                                             
                             />                                                           
                        </Form>
                    )}                
                </Formik>                
            </React.Fragment>            
        );
    }
}

export default withRouter(CrearCataContainer);