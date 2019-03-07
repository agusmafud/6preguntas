import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Pulse from 'react-reveal/Pulse';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {
        marginBottom: theme.spacing.unit,
    },
    botonCta: {
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,        
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '80%',
        },
    },
    textOmitido: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 4,
            marginBottom: theme.spacing.unit * 6,
        },
    }
});

const getValorPregunta = (valor, fase) => {
    switch(fase) {
        case 1: switch(valor) {
            case '0': return 0; case '1': return 2; case '2': return 5; case '3': return 7;
            case '4': return 10; case '5': return 14; case '6': return 16; default: return 0;  
        }
        case 2: switch(valor) {
            case '0': return 0; case '1': return 2; case '2': return 4; case '3': return 6;
            case '4': return 8; case '5': return 10; case '6': return 12; default: return 0;  
        }
        case 3: switch(valor) {
            case '0': return 0; case '1': return 5; case '2': return 8; case '3': return 11;
            case '4': return 14; case '5': return 17; case '6': return 20; default: return 0;  
        }
        case 4: switch(valor) {
            case '0': return 0; case '1': return 4; case '2': return 6; case '3': return 10;
            case '4': return 14; case '5': return 18; case '6': return 22; default: return 0;  
        }
        case 5: switch(valor) {
            case '0': return 0; case '1': return 5; case '2': return 8; case '3': return 11;
            case '4': return 14; case '5': return 17; case '6': return 20; default: return 0;  
        }
        case 6: switch(valor) {
            case '0': return 0; case '1': return 2; case '2': return 4; case '3': return 5;
            case '4': return 7; case '5': return 9; case '6': return 10; default: return 0;  
        }
        default: return 0
    }
 
}

const renderPuntaje = (respuestasProducto) => {
    if (respuestasProducto.preg1 !== '-1' && respuestasProducto.preg2 !== '-1' && respuestasProducto.preg3 !== '-1' && 
    respuestasProducto.preg4 !== '-1' && respuestasProducto.preg5 !== '-1' && respuestasProducto.preg6 !== '-1') {
        return(
            <Typography color='primary' variant='h6' align='center' gutterBottom>
                {
                    getValorPregunta(respuestasProducto.preg1,1) + getValorPregunta(respuestasProducto.preg2,2) + 
                    getValorPregunta(respuestasProducto.preg3,3) + getValorPregunta(respuestasProducto.preg4,4)  +
                    getValorPregunta(respuestasProducto.preg5,5) + getValorPregunta(respuestasProducto.preg6,6)
                }{' puntos'}
            </Typography>
        )
    }
        else {
            return null;
        }
}

const Acciones = ({ classes, resultados, cantidadProductos, respuestasProducto, productoActual, 
    handlePreviousProducto, handleNextProducto, handleFinCataClick }) => {
    return (
        <Grid container direction="row" justify="space-around" alignItems="center" className={classes.root}>
            
            {
                respuestasProducto.omitido &&
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' paragraph className={classes.textOmitido}>
                            Decidiste no catar esta bebida
                        </Typography>                
                    </Grid>
            }            

            <Grid container direction="row" justify="space-around" alignItems="flex-end" item xs={12}>
                {
                    respuestasProducto.orden > 0 &&                                                
                        <Grid item>
                            <Button color='secondary' onClick={() => handlePreviousProducto()} size='small' style={{marginBottom: 8}}>
                                Atrás
                            </Button>
                        </Grid>                        
                }

                {
                    respuestasProducto.orden < (cantidadProductos - 1) &&                                                
                        <Grid item xs style={{textAlign: 'center', width: '100%'}}>
                            <Pulse>        
                                <div>
                                    {!resultados && renderPuntaje(respuestasProducto)}
                                        
                                    <Button 
                                        id='botonContinuar'
                                        variant='contained' color='primary' size='large' className={classes.botonCta}
                                        onClick={() => handleNextProducto()}
                                    >
                                        Continuar
                                    </Button>
                                </div>
                            </Pulse>
                        </Grid>                                                                    
                }            

                {
                    respuestasProducto.orden === (cantidadProductos - 1) &&                                                                                            
                        <Grid item xs style={{textAlign: 'center', width: '100%'}}>
                            <Pulse>
                                <Button 
                                    id='botonContinuar'
                                    variant='contained' color='primary' size='large' className={classes.botonCta}
                                    onClick={() => handleFinCataClick()}
                                >
                                    Finalizar
                                </Button>    
                            </Pulse>                                     
                        </Grid>                                       
                }
            </Grid>

        </Grid>
    );
};

Acciones.propTypes = {   
    classes: PropTypes.object.isRequired,   
    resultados: PropTypes.bool.isRequired,
    cantidadProductos: PropTypes.number.isRequired, 
    respuestasProducto: PropTypes.object.isRequired,
    productoActual: PropTypes.number.isRequired,
    handlePreviousProducto: PropTypes.func.isRequired,
    handleNextProducto: PropTypes.func.isRequired, 
    handleFinCataClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Acciones);