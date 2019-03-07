import React from 'react';
import PropTypes from 'prop-types';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import EndIcon from '@material-ui/icons/ExitToAppRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({            
    appBar: {        
        zIndex: 999,
        background: '#fff',        
    },
    stepper: {
        width: '100%',
        height: 72,              
    },
    toolbar: {
        marginTop: - theme.spacing.unit * 1.5,
        marginBottom: theme.spacing.unit,
    },
    nombre: {
        fontSize: 14,        
        textAlign: 'center',
        marginTop: -12,
        paddingTop: 0, 
        paddingBottom: 6,       
        paddingRight: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            fontSize: 16,
            textAlign: 'left',
            padding: 0,
            paddingTop: theme.spacing.unit,
        },  
    },    
});

const Progreso = ({ classes, resultados, preguntasOn, productos, productoActual, handleHomeClick }) => {

    const producto = productos.find( p => p.orden === productoActual );
    
    return (        
        <AppBar position='sticky' color="default" className={classes.appBar}>
            <Grid container direction="row" justify="center" alignItems="center">
                
                <Grid item>
                    <IconButton 
                        onClick={() => handleHomeClick()}
                        color="inherit" aria-label="Menú de opciones"
                        style={{transform: 'rotate(180deg)'}}
                    >
                        <EndIcon />
                    </IconButton>
                </Grid>
                
                <Grid item xs>
                    <Stepper activeStep={productoActual}>                
                        {
                            productos
                                .sort((a, b) => a.orden - b.orden)
                                .map( (producto) =>
                                    <Step key={producto.orden}>
                                        <StepLabel></StepLabel>
                                    </Step>
                                )
                        }            
                    </Stepper>                        
                </Grid>
                
                {
                    !resultados && preguntasOn &&
                        <Grid item xs={8} sm={6} lg={4}>
                            <Typography variant="h6" color="primary" className={classes.nombre}>
                                {producto.nombre}
                            </Typography>                                                                                    
                        </Grid>
                }

            </Grid>
                        
                  
        </AppBar>
    );
};

Progreso.propTypes = {
    classes: PropTypes.object.isRequired,
    resultados: PropTypes.bool.isRequired,
    preguntasOn: PropTypes.bool.isRequired,    
    productos: PropTypes.array.isRequired,
    productoActual: PropTypes.number.isRequired,    
    handleHomeClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Progreso);