import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

import ResultadoProducto from './ResultadoProducto';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({            
    imagen: {
        height: 200,
        borderRadius: 4,
        boxShadow: theme.shadows[2],
        marginBottom: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0,
        }
    },
    gridTexto: {                        
        minWidth: 250,
        textAlign: 'center',                
        padding: theme.spacing.unit,
        paddingTop: 0,                
        [theme.breakpoints.up('sm')]: {            
            padding: theme.spacing.unit * 2,              
            paddingTop: 0,
            paddingLeft: theme.spacing.unit * 3,          
            textAlign: 'left'
        },         
    },

    chip: {
        margin: theme.spacing.unit,
        marginTop: 0,
    },
    
    divider: {
        marginBottom: theme.spacing.unit * 3,
    },    
    centrado: {
        width:'100%',
        textAlign:'center', 
    },
    botonCatar: {
        padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 4}px`,
        fontSize: 18,
        marginBottom: theme.spacing.unit * 0.5,
    }
});

const catarProducto = (setFieldValue, orden) => {
    window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    setFieldValue(`respuestasCata[${orden}].respondido`, true);
}

const saltearProducto = (setFieldValue, orden, cantidadProductos, handleNextProducto, handleFinCataClick) => {         
    setFieldValue(`respuestasCata[${orden}].omitido`, true);    
    if (cantidadProductos !== orden + 1) {
        handleNextProducto();
    } else {
        handleFinCataClick();
    }        
}


const VistaAmplia = ({ classes, resultados, producto, cantidadProductos, 
setFieldValue, handleNextProducto, handleFinCataClick }) => {    
    return (
        
        <Grid container direction="row" justify="center" alignItems="flex-start">

            <Grid item>
                <img src={producto.imagen} alt='' className={classes.imagen}/>
            </Grid>

            <Grid item xs className={classes.gridTexto} style={{textAlign: resultados ? 'center' : 'left'}}>                
                <Typography variant="h5" component='h4' gutterBottom>
                    {producto.nombre}
                </Typography>                                    
                
                {
                    resultados ?                                                    
                        <React.Fragment>                                
                            <ResultadoProducto />    
                            <Hidden smUp>
                                <Divider variant='middle' className={classes.divider}/>
                            </Hidden>                                                                                
                        </React.Fragment>
                    :
                        <React.Fragment>                                
                            { producto.tipo && <Chip label={producto.tipo} color='primary' className={classes.chip}/> }                            
                            { producto.cepa && <Chip label={producto.cepa} color='primary' className={classes.chip}/> }

                            <Typography variant="body1" paragraph>
                                {producto.descripcion}
                            </Typography>    
                        </React.Fragment>                    
                }                    
                
                {
                    !resultados && 
                        <React.Fragment>
                            <Divider variant='middle' className={classes.divider}/>
                            
                            <div className={classes.centrado}>
                                <Button 
                                    onClick={
                                        () => catarProducto(setFieldValue, producto.orden)                                        
                                    }
                                    color='primary' variant='contained' size='large' className={classes.botonCatar}
                                >
                                    CATAR
                                </Button>
                            </div>

                            <div className={classes.centrado}>
                                <Button size='small' color='secondary'
                                    onClick={ 
                                        () => saltearProducto(setFieldValue, producto.orden, cantidadProductos, handleNextProducto, handleFinCataClick) 
                                    }
                                >
                                    (saltear)
                                </Button>
                            </div>    
                        </React.Fragment>
                }
            </Grid>
        
        </Grid>
        
    );
};

VistaAmplia.propTypes = {   
    classes: PropTypes.object.isRequired,
    resultados: PropTypes.bool.isRequired,
    producto: PropTypes.object.isRequired,
    cantidadProductos: PropTypes.number.isRequired,
    setFieldValue: PropTypes.func,
    handleNextProducto: PropTypes.func.isRequired,
    handleFinCataClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(VistaAmplia);