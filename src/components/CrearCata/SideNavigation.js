import React from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import PreviousIcon from '@material-ui/icons/ArrowBackIosRounded';
import NextIcon from '@material-ui/icons/ArrowForwardIosRounded';
import EndIcon from '@material-ui/icons/ExitToAppRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({            
    fabNext: {
        position: 'fixed', top: '40vh', zIndex:999,
        right: 4,
        [theme.breakpoints.up('md')]: {            
            right: '10%'
        },
        [theme.breakpoints.up('lg')]: {            
            right: '15%'
        },
    },
    fabPrevious: {
        position: 'fixed', top: '40vh', zIndex:999,
        left: 4,
        [theme.breakpoints.up('md')]: {            
            left: '10%'
        },
        [theme.breakpoints.up('lg')]: {            
            left: '15%'
        },     
    }
});

const SideNavigation = ({ classes, values, pasoActual, handlePreviousPaso, handleNextPaso}) => {
    return (
        <React.Fragment>
            {
                pasoActual > 0 &&
                <Fab 
                    onClick={() => handlePreviousPaso()}
                    color="primary" aria-label="Add" className={classes.fabPrevious}>
                    <PreviousIcon />
                </Fab>
            }
            {
                pasoActual === 0 && 
                <Fab
                    disabled={values.nombre === ''}
                    onClick={() => handleNextPaso()} 
                    color="primary" aria-label="Add" className={classes.fabNext}>
                    <NextIcon />
                </Fab>            
            }
            {
                pasoActual === 2 &&                
                <Fab                  
                    color="primary" aria-label="Add" className={classes.fabNext}>
                    <EndIcon />
                </Fab>            
            }            
        </React.Fragment>
    );
};

SideNavigation.propTypes = {
    classes: PropTypes.object.isRequired,  
    values: PropTypes.object.isRequired,
    pasoActual: PropTypes.number.isRequired,
    handlePreviousPaso: PropTypes.func.isRequired,
    handleNextPaso: PropTypes.func.isRequired,
};
export default withStyles(styles)(SideNavigation);