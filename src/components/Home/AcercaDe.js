import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                                   
        width: '100%',
    },
    margin: {
        margin: theme.spacing.unit,
    }    
});

const AcercaDe = ({ classes, handleAcercaDeClick }) => {
    return (
        <div className={classes.root}>
            
            <Typography variant="h5" gutterBottom>
                Acerca de esta aplicación:
            </Typography>                      
            <Button 
                onClick={handleAcercaDeClick}
                size="medium" aria-label="Acerca de" className={classes.margin}>
                Acerca de
            </Button>
         
        </div>
    );
};

AcercaDe.propTypes = {
    classes: PropTypes.object.isRequired,
    handleAcercaDeClick: PropTypes.func.isRequired,    
};

export default withStyles(styles)(AcercaDe);