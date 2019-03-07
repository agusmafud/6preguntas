import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                                   
        width: '100%',
    },
    margin: {
        margin: theme.spacing.unit,
    }    
});

const AcercaDeLayout = ({ classes }) => {
    return (
        <div className={classes.root}>            
            <Typography variant="h5" gutterBottom>
                Acerca de pendiente
            </Typography>
        </div>
    );
};

AcercaDeLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AcercaDeLayout);
