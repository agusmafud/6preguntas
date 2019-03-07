import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CrearCataIcon from '@material-ui/icons/CreateRounded';
import IngresarACataIcon from '@material-ui/icons/LaunchRounded';

import Slide from 'react-reveal/Slide';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                                   
        width: '90%',
        maxWidth: 600,
        margin: '0 auto',  
        marginTop: theme.spacing.unit * 3,     
        marginBottom: theme.spacing.unit * 2,
        /* CENTRADO VERTICAL */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 3,
        }, 
    },    
    paper: {
        width: '100%',
        padding: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 3,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 4,
            paddingTop: theme.spacing.unit * 3,
            paddingBottom: theme.spacing.unit * 4,
        }, 
        
    },
    boton: {
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,        
    },
    margenSuperior : {
        marginTop: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 4,
        }, 
    }
});

const CtaCatas = ({ classes, handleCrearCataClick }) => {
    return (
        <Slide left>
            <div className={classes.root}>                                
                <Paper className={classes.paper}>
                    <Typography variant="h6" align="center" gutterBottom style={{fontSize: 17}}>
                        Usalo con tus amigos. Guardá tus catas favoritas:
                    </Typography>
                    <Button 
                        onClick={handleCrearCataClick}
                        variant='contained' color='primary' fullWidth size='large' className={classes.boton}>
                        <CrearCataIcon style={{marginRight: 8}}/>
                        Creá tu cata
                    </Button>
                    <Typography variant="h6" align="center" gutterBottom className={classes.margenSuperior} style={{fontSize: 17}}>
                        ¿Un amigo te compartió una cata?
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={10} style={{border: '1px solid #e3e3e3', borderRadius: 4, paddingTop: 12, paddingBottom: 8, marginBottom: 8}}>
                            <Typography variant='body1' align="center" gutterBottom>
                                Ingresá el código de la cata
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button                         
                                variant='contained' color='primary' size='large' className={classes.boton}>
                                <IngresarACataIcon />                                                        

                            </Button>                        
                        </Grid>
                    </Grid>                    
                </Paper>   
            </div>
        </Slide>
    );
};

CtaCatas.propTypes = {
    classes: PropTypes.object.isRequired,
    handleCrearCataClick: PropTypes.func.isRequired,    
};

export default withStyles(styles)(CtaCatas);