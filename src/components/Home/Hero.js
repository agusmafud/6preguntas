import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SeisIcon from '@material-ui/icons/Looks6TwoTone';
import VotarIcon from '@material-ui/icons/HowToVoteRounded';
import ResultadosIcon from '@material-ui/icons/AssessmentRounded';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                           
        minHeight: '60vh',        
        width: '90%',
        maxWidth: 600,
        margin: '0 auto',  
        marginTop: theme.spacing.unit * 5,       
        /* CENTRADO VERTICAL */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },    
    textoAccion: {
        fontSize: 16,
        marginTop: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
        },
    },    
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,           
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 3,        
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,     
        }
    },    
    gridItem: {
        marginTop: theme.spacing.unit * 1.5,
        marginBottom: 0,
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5,
        [theme.breakpoints.up('sm')]: {
            marginTop: 0,            
            marginBottom: theme.spacing.unit * 1.5,
            paddingLeft: theme.spacing.unit * 2,
            paddingRight: theme.spacing.unit * 2,
        },
    },
    boton: {
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,                
    }
});

const Hero = ({ classes, handleResponderEjemploClick, handleResultadosEjemploClick }) => {
    return (
        <div className={classes.root}>
            
            <Zoom cascade duration={1000}>
                <div>                                    
                    <Typography color='primary' variant="h3" align="center" component="h1" gutterBottom>
                        <SeisIcon color='primary' style={{fontSize: 60, marginBottom: -16}}/>preguntas
                    </Typography>
                    <Typography color='primary' variant="h6" align="center" component="h1" paragraph>
                        Catas virtuales de vinos y bebidas
                    </Typography>
                </div>                
            </Zoom>

            <Fade bottom cascade duration={2500}>
                <div>
                    <Typography variant="h6" align="center" className={classes.textoAccion} >
                        Compartí catas con tus amigos.
                    </Typography>
                    <Typography variant="h6" align="center" paragraph className={classes.textoAccion}>
                        Votá y descubrí que opinaron los demás.
                    </Typography>
                </div>
            </Fade>     
            
            <Slide left>
                <Paper className={classes.paper}>
                    <Grid container direction="row" justify="center" alignItems="center" className={classes.grid}>
                        
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h6" align="center">
                                Conocelo con un ejemplo
                            </Typography>      
                        </Grid>
                        
                        <Grid item xs={12} sm={6} className={classes.gridItem}>
                            <Typography variant="subtitle1" color='textSecondary' align="center" gutterBottom>
                                Votá en una cata:
                            </Typography>            
                            <Button 
                                onClick={handleResponderEjemploClick}
                                variant='contained' color='primary' fullWidth size='large' className={classes.boton}>
                                <VotarIcon style={{marginRight: 8}}/>
                                Votar
                            </Button>
                        </Grid>
                            
                        <Grid item xs={12} sm={6} className={classes.gridItem}>
                            <Typography variant="subtitle1" color='textSecondary' align="center" gutterBottom>
                                Mirá lo que votó la gente:
                            </Typography>
                            <Button 
                                onClick={handleResultadosEjemploClick}
                                variant='contained' color='primary' fullWidth size='large' className={classes.boton}>
                                <ResultadosIcon  style={{marginRight: 8}}/>
                                Ver resultados
                            </Button>
                        </Grid>
                    </Grid>    
                </Paper>
            </Slide>

        </div>
    );
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
    handleResponderEjemploClick: PropTypes.func.isRequired,
    handleResultadosEjemploClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Hero);