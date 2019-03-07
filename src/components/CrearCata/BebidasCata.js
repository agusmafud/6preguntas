import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Zoom from 'react-reveal/Zoom';

import withStyles from '@material-ui/core/styles/withStyles';
import SacarFoto from './SacarFoto';
const styles = theme => ({        
    root: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 4,
    },
    expansionContainer: {        
        marginTop: theme.spacing.unit * 2,                    
    },
    expansionPanel: {
        width: '95%',
        maxWidth: 800,
        margin: '0 auto',        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    
    details: {        
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {            
            flexDirection: 'row',
            alignItems: 'center',
        },    
    },
    column: {
        flexBasis: '100%',        
        textAlign: 'center',
        marginBottom: 0,
        [theme.breakpoints.up('sm')]: {            
            flexBasis: '33.33%',            
        },                
    },
    
    imagenContainer: {                
        flexBasis: '100%',
        maxWidth: 200,
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {                        
            flexBasis: '33.33%',
            marginBottom: 0,
        },                    
    },
    imagen: {
        width: '100%',
        borderRadius: 4,
        boxShadow: theme.shadows[2],
    },

    helper: {
        flexBasis: '100%',
        borderLeft: 0,
        borderTop: `2px solid ${theme.palette.divider}`,
        marginLeft: 0,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        [theme.breakpoints.up('sm')]: {            
            flexBasis: '66.33%',
            borderLeft: `2px solid ${theme.palette.divider}`,
            borderTop: 0,
            marginLeft: theme.spacing.unit * 2,            
        },       
    },    
    
    botones: {
        padding: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    botonCta: {        
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,        
        width: '90%',
        margin: theme.spacing.unit,
    },   
    
});

const renderHeading = (i) => {
    switch (i) {
        case 0: return 'Primera bebida';
        case 1: return 'Segunda bebida';
        case 2: return 'Tercera bebida';
        case 3: return 'Cuarta bebida';
        case 4: return 'Quinta bebida';
        default: return '';                                
    }
}

const sumarProductoHabilitado = (productos) => {
    let ultimoProducto = productos[productos.length - 1];
    if ( productos.length < 5 && ultimoProducto.imagen && (ultimoProducto.nombre !== '') ) {
        return true
    } else {
        return false
    }
}

const crearCataHabilitado = (productoInicial) => {        
    if ( productoInicial.imagen && (productoInicial.nombre !== '') ) {
        return true
    } else {
        return false
    }
}

const BebidasCata = ({ classes, values, handleChangePasoActual, handleSumarProducto, setFieldValue }) => {   
    
    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>

            
            <Grid item xs={12} style={{margin: 8, marginTop: 32}}> 
                <Zoom cascade>                    
                    <Typography align='center' variant='h5' gutterBottom>
                        Sumá de 1 a 5 bebidas a catar
                    </Typography>
                    <Typography align='center' variant='subtitle1' color='primary' paragraph>
                        Sólo se necesita una foto y un nombre para cada bebida.                              
                    </Typography>                                    
                </Zoom>
            </Grid>
            
            {                                
                values.productos
                    .sort((a, b) => a.orden - b.orden)
                    .map((e, i) =>    
                        <Grid key={i} item xs={12} className={classes.expansionContainer}>      
                            
                            <ExpansionPanel className={classes.expansionPanel}>
                            
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>{renderHeading(i)}</Typography>
                                    </div>
                                    <div className={classes.column}>                                        
                                        <Typography className={classes.secondaryHeading}>
                                            {values.productos[i].nombre ? values.productos[i].nombre : ''}
                                        </Typography>
                                    </div>
                                </ExpansionPanelSummary>
                            
                                <ExpansionPanelDetails className={classes.details}>                                    
                                    {
                                        !e.imagen ?
                                                <SacarFoto 
                                                    posicion={i}
                                                    setFieldValue={setFieldValue}
                                                />
                                            :
                                                <React.Fragment>
                                                    <div className={classes.imagenContainer}>                                             
                                                        <img src={e.imagen} alt='' className={classes.imagen}/>
                                                    </div>              

                                                    <div className={classes.helper} >
                                                        <Typography variant='h5' align='center' gutterBottom>
                                                            Ingresa un nombre y un breve detalle para esta bebida.
                                                        </Typography>
                                                        <Typography variant='subtitle1' align='center' paragraph>
                                                            También podés sumar etiquetas para describirlo.
                                                        </Typography>
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].nombre`} label="Nombre de la bebida"
                                                        />                                                                                                                                                                                                    
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}multiline
                                                            name={`productos[${i}].descripcion`} label="Descripción"
                                                        />                                                                                                            
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].tipo`} label="Tag 1 (tipo)"
                                                        />                                                                
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].cepa`} label="Tag 2 (tipo)"
                                                        />
                                                    </div>
                                                </React.Fragment>
                                    }
                                    
                                    
                                </ExpansionPanelDetails>
                                                                
                            </ExpansionPanel>
                                                  
                        </Grid>
                )            
            }

            <Grid container direction="row" justify="center" alignItems="center"  item xs={12} className={classes.botones}>                                     
                <Grid item xs={12} sm={5} md={3}>
                    <Button                                                
                        disabled={!sumarProductoHabilitado(values.productos)}
                        variant="outlined" size='large' color="primary"                
                        onClick={() => handleSumarProducto()}                                            
                        className={classes.botonCta}
                    >
                        Sumar otra bebida
                    </Button>
                </Grid>
                
                <Grid item xs={12} sm={5} md={3}>
                    <Button                  
                        disabled={!crearCataHabilitado(values.productos[0])}                 
                        variant="contained" size='large' color="primary"                
                        onClick={() => handleChangePasoActual(2)}                                            
                        className={classes.botonCta}
                    >
                        Crear cata
                    </Button>    
                </Grid>                                
            </Grid> 

        </Grid>
    );
};

BebidasCata.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,    
    handleChangePasoActual: PropTypes.func.isRequired,    
    handleSumarProducto: PropTypes.func.isRequired,      
    setFieldValue: PropTypes.func.isRequired,    
};

export default withStyles(styles)(BebidasCata);