import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({           
    botonSeleccionado: {
        width: '100%',                
        padding: `${theme.spacing.unit * 1.5}px 0`,
        marginBottom: 0,
        borderRadius: 4,
        background: theme.palette.primary.main,                
        boxShadow: theme.shadows[1],
        [theme.breakpoints.up('sm')]: {          
            padding: `${theme.spacing.unit * 2}px 0`,
            marginBottom: theme.spacing.unit,
        },
    },    
    boton: {
        width: '100%',    
        padding: `${theme.spacing.unit * 1.5}px 0`,        
        marginBottom: 0,
        border:`1px solid ${theme.palette.primary.main}`,
        borderRadius: 4,                                                     
        [theme.breakpoints.up('sm')]: {          
            padding: `${theme.spacing.unit * 2}px 0`,
            marginBottom: theme.spacing.unit,
        }
    },
    valorSeleccionado: {
        color: '#fff',
        fontSize: 14,
        [theme.breakpoints.up('sm')]: {          
            fontSize: 16,   
        },        
    },
    valor: {
        fontSize: 14,
        [theme.breakpoints.up('sm')]: {          
            fontSize: 16,   
        },        
    }    
});


const PreguntasListItemButton = ({ classes, valor, selected, focus }) => {
    return (
       
    
    <div 
        className={ selected ? classes.botonSeleccionado : classes.boton }                
    >
        <Typography 
            variant='button' 
            color={focus ? 'primary': 'textSecondary'}
            className={ selected ? classes.valorSeleccionado : classes.valor }       
        >
            {`+ ${valor}`}
        </Typography>        
    </div>    
                        
    );
};

PreguntasListItemButton.propTypes = {   
    classes: PropTypes.object.isRequired,    
    valor: PropTypes.number.isRequired,    
    selected: PropTypes.bool.isRequired,
    focus: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PreguntasListItemButton);