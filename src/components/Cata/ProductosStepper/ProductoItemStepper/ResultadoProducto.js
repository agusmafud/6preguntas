import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    grid: {        
        padding: theme.spacing.unit * 2,        
    },
    gridItem: {
        textAlign: 'center',        
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        maxWidth: 100,
        [theme.breakpoints.up('sm')]: {            
            maxWidth: 110,
        }, 
    }
});

const ProductosItemStepper = ({ classes }) => {
    return (
        
            <Grid item xs={12} container direction="row" justify="center" alignItems="flex-start" className={classes.grid}>                

                <Grid item className={classes.gridItem}>
                    <CircularProgressbar
                        strokeWidth='12'
                        percentage={87}
                        text={`87`}
                        initialAnimation
                        styles={{
                            path: { stroke: '#9c27b0' },
                            text: { fill: '#000', fontSize: '28px' },
                        }}
                    />
                    <Typography variant='caption' align='center'>
                        Tu puntaje
                    </Typography>
                </Grid>
                
                <Grid item className={classes.gridItem}>
                    <CircularProgressbar
                        strokeWidth='12'
                        percentage={34}
                        text={`34`}
                        initialAnimation
                        styles={{
                            path: { stroke: '#e040fb' },
                            text: { fill: '#000', fontSize: '28px' },
                        }}
                    />
                    <Typography variant='caption' align='center'>
                        Puntaje de la gente
                    </Typography>
                </Grid>
                    
            </Grid>
        
    );
};

ProductosItemStepper.propTypes = {   
    classes: PropTypes.object.isRequired,   
};

export default withStyles(styles)(ProductosItemStepper);