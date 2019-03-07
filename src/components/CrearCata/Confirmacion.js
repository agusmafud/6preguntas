import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({    
    buttons: {
        display: 'flex',
        margin: '0 auto',
        marginTop: 8,
        marginBottom: 16,
        justifyContent: 'center',      
    },
      button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },   
});

const Confirmacion = ({ classes, values, handleSubmitCataClick }) => {
    return (
        <Grid container spacing={24}>
                                                                                
            <div className={classes.buttons}>
                <Button
                    variant="contained"
                    size='large'
                    color="primary"
                    onClick={() => handleSubmitCataClick()}                                            
                    className={classes.button}
                >
                    Compartir
                </Button>
            </div>
        </Grid>
    );
};

Confirmacion.propTypes = {
    classes: PropTypes.object.isRequired,    
    values: PropTypes.object.isRequired,
    handleSubmitCataClick: PropTypes.func.isRequired,    
};

export default withStyles(styles)(Confirmacion);