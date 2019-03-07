import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import withStyles from '@material-ui/core/styles/withStyles';
import Thumb from './Thumb';
const styles = theme => ({    
    root: {
        background: theme.palette.primary.light,        
        border: '1px solid #eee', 
        borderRadius: 4,        
    },    
    listItem: {
        background: '#fff',
        marginBottom: theme.spacing.unit,
        borderRadius: 4,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

const GridBebidas = ({ classes, producto }) => {    

    return (        
        <ListItem className={classes.listItem}>
            {
                !!producto.imagen &&
                    <ListItemAvatar>                
                        <Thumb imagen={producto.imagen} className={classes.bigAvatar}/>                        
                    </ListItemAvatar>
            }            
            <ListItemText
                primary={producto.nombre}
                secondary={`${producto.tipo} - ${producto.cepa}`}
            />
            <ListItemSecondaryAction>
                <span>XXX</span>
            </ListItemSecondaryAction>
        </ListItem>            
    );
};

GridBebidas.propTypes = {
    classes: PropTypes.object.isRequired,  
    producto: PropTypes.object.isRequired,  
};

export default withStyles(styles)(GridBebidas);