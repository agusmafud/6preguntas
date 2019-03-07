import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SeisIcon from '@material-ui/icons/Looks6TwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import CrearCataIcon from '@material-ui/icons/CreateRounded';
import IngresarACataIcon from '@material-ui/icons/LaunchRounded';
import UserIcon from '@material-ui/icons/AccountBoxRounded';
import AboutIcon from '@material-ui/icons/BuildRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    headerMenu: {
        marginTop: 8, 
        marginBottom: 16, 
        fontSize: 16
    }
});

const Menu = ({ classes, menu, toggleMenu, handleCrearCataClick }) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        onClick={toggleMenu(true)}
                        color="inherit" aria-label="Menú de opciones"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color='inherit'>
                        <SeisIcon style={{fontSize: 30, marginBottom: -10}}/>preguntas
                    </Typography>                
                </Toolbar>
            </AppBar>
            <Drawer open={menu} onClose={toggleMenu(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleMenu(false)}
                    onKeyDown={toggleMenu(false)}
                >
                    <div className={classes.list}>
                        <List
                            subheader={
                                <Typography variant="h6" align='center' color='primary' 
                                    className={classes.headerMenu}                                    
                                >
                                    <SeisIcon style={{fontSize: 30, marginBottom: -10}}/>preguntas
                                </Typography>
                            }
                        >                                                    
                            <ListItem button onClick={handleCrearCataClick}>
                                <ListItemIcon>
                                    <CrearCataIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Crear cata'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <IngresarACataIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Entrar a cata'} />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <UserIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Mis catas'} />
                            </ListItem>                        
                        </List>
                        <Divider />
                        <List>                    
                            <ListItem button>
                                <ListItemIcon>
                                    <AboutIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Acerca de este sitio'} />
                            </ListItem>                        
                        </List>
                    </div>
                </div>
            </Drawer>
        </div>
    
    );
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    menu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    handleCrearCataClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Menu);