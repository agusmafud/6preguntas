import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import TouchIcon from '@material-ui/icons/TouchAppRounded';
import PuntajeIcon from '@material-ui/icons/GavelRounded';
import RankingIcon from '@material-ui/icons/PollRounded';
import SwipeIcon from '@material-ui/icons/CompareArrowsRounded';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({            
    cta: {
        width: '95%', 
        margin: '0 auto', 
        marginBottom: theme.spacing.unit * 1.5, 
        paddingBottom: theme.spacing.unit * 1.5, 
        paddingTop: theme.spacing.unit * 1.5
    },
    icon: {
        marginRight: theme.spacing.unit, 
        marginBottom: -10, 
        fontSize: 32
    },
    espacioExtra: {
        paddingTop: 0,
        [theme.breakpoints.up('sm')]: {            
            paddingTop: theme.spacing.unit * 2
        },
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const Splash = ({ fullScreen, classes, open, handleOffSplash, nombre, descripcion, resultados }) => {
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            TransitionComponent={Transition}            
            onClose={handleOffSplash}
            aria-labelledby="titulo"
            aria-describedby="descripcion"
        >
            <DialogTitle id="titulo">
                <Typography variant='h6' align='center' component='p'>
                    { resultados ? 'Resultados de la cata' : 'Bienvenido a la cata' }
                </Typography>
                <Typography variant='subtitle1' align='center' color='primary' component='p'>
                    {nombre}
                </Typography>
            </DialogTitle>
            
            <DialogContent>
                <DialogContentText id="descripcion">
                    {
                        resultados ?
                        <React.Fragment>
                                <Zoom duration={1000}>
                                    <Typography variant='h5' align='center' component='span' paragraph>                        
                                        Acá podés ver tus votos versus el del resto de los participantes
                                    </Typography>
                                </Zoom>
                                <Fade bottom cascade duration={2000}>                                    
                                    <div>
                                        <Typography variant='subtitle1' align='justify' color='textSecondary' component='span' paragraph className={classes.espacioExtra}>
                                            <SwipeIcon color='primary' className={classes.icon} style={{fontSize: 40}}/>
                                            Swipea con tus dedos para navegar entre las bebidas.
                                        </Typography>
                                        <Typography variant='subtitle1' align='justify' color='textSecondary' component='span' paragraph className={classes.espacioExtra}>
                                            <PuntajeIcon color='primary' className={classes.icon}/>
                                            Cada bebida tiene un puntaje del 0 al 100, siendo 100 el mejor valor.
                                        </Typography>      
                                    </div>              
                                </Fade>                                
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <Zoom duration={1000}>
                                    <Typography variant='h5' align='center' component='span' paragraph>                        
                                        Catar es conocer a través de los sentidos.
                                    </Typography>
                                </Zoom>
                                <Fade bottom cascade duration={2000}>                                    
                                    <div>
                                        <Typography variant='subtitle1' align='justify' color='textSecondary' component='span' paragraph className={classes.espacioExtra}>
                                            <TouchIcon color='primary' className={classes.icon} />
                                            Seguí las indicaciones de cada pregunta y seleccioná tu respuesta.
                                        </Typography>
                                        <Typography variant='subtitle1' align='justify' color='textSecondary' component='span' paragraph className={classes.espacioExtra}>
                                            <PuntajeIcon color='primary' className={classes.icon} />
                                            Cada bebida tiene un puntaje del 0 al 100, siendo 100 el mejor valor.
                                        </Typography>                    
                                        <Typography variant='subtitle1' align='justify' color='textSecondary' component='span' className={classes.espacioExtra}>
                                            <RankingIcon color='primary' className={classes.icon} />
                                            Al final de la cata, verás tus resultados comparados con el del resto de los participantes.
                                        </Typography>
                                    </div>
                                </Fade>
                            </React.Fragment>
                    }                    
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>                
                <Button onClick={handleOffSplash} variant='contained' color="primary" size='large' 
                    className={classes.cta} 
                >
                    { resultados ? 'Ver resultados' : 'Comenzar' }
                </Button>
            </DialogActions>
        </Dialog>
    );
};

Splash.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleOffSplash: PropTypes.func.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    resultados: PropTypes.bool.isRequired,
};
export default withMobileDialog()(withStyles(styles)(Splash));