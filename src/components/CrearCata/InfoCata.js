import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Paper from '@material-ui/core/Paper';

import Zoom from 'react-reveal/Zoom'

import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
const styles = theme => ({    
    paper: {
        width: '95%',
        maxWidth: 800,
        margin: '0 auto',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 4,
        padding: theme.spacing.unit * 3,   
        paddingBottom: theme.spacing.unit * 2,   
        [theme.breakpoints.up('sm')]: {                        
            marginTop: theme.spacing.unit * 4,
            padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 6}px`,  
        },
    },   
    
    botonCta: {
        marginTop: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,        
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '80%',
        },
    },   
});

const InfoCata = ({ classes, values, handleChangePasoActual }) => {
    return (
        
        <Zoom>
            <Paper className={classes.paper}>
                
                <Grid container>

                    <Grid item xs={12}>                                                                      
                        <Typography align='center' variant='h5' paragraph>
                            Bienvenido a tu nueva cata
                        </Typography>
                        <Typography align='center' variant='subtitle1' color='primary' paragraph>
                            Vas a poder crear rápidamente una cata y compartirla con tus amigos.                             
                        </Typography>
                        <Typography align='center' variant='subtitle2' gutterBottom style={{marginTop: 24}}>                            
                            Comenzá eligiendo el nombre de la cata.
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>                                                                      
                        <Field                                                                                     
                            fullWidth type="text" variant="filled" component={TextField} 
                            name="nombre" label="Nombre de la cata"
                        />                                                                                                                                                    
                    </Grid>                   

                    <Grid item xs={12} style={{textAlign:'center'}}>                                     
                        <Button
                            variant="contained"
                            size='large'
                            color="primary"
                            disabled={values.nombre === ''}
                            onClick={() => handleChangePasoActual(1)}                                            
                            className={classes.botonCta}
                        >
                            Subir bebidas a catar
                        </Button>
                    </Grid>      

                </Grid>          

            </Paper>
        </Zoom>
        
    );
};

InfoCata.propTypes = {
    classes: PropTypes.object.isRequired,   
    values: PropTypes.object.isRequired, 
    handleChangePasoActual: PropTypes.func.isRequired,    
};

export default withStyles(styles)(InfoCata);