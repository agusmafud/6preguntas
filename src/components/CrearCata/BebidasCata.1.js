import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import FileReaderInput from 'react-file-reader-input';
import AvatarEditor from 'react-avatar-editor';
import Slider from '@material-ui/lab/Slider';

import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({        
    root: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 4,
    },
    expansionContainer: {        
        marginTop: theme.spacing.unit * 2,                    
    },
    expansionPanel: {
        width: '95%',
        maxWidth: 800,
        margin: '0 auto',        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    
    details: {        
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {            
            flexDirection: 'row',
            alignItems: 'center',
        },    
    },
    column: {
        flexBasis: '100%',        
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {            
            flexBasis: '33.33%',
            marginBottom: 0,
        },                
    },
    
    imagenContainer: {                
        flexBasis: '100%',
        maxWidth: 200,
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {                        
            flexBasis: '33.33%',
            marginBottom: 0,
        },                    
    },
    imagen: {
        width: '100%',
        borderRadius: 4,
        boxShadow: theme.shadows[2],
    },

    helper: {
        flexBasis: '100%',
        borderLeft: 0,
        borderTop: `2px solid ${theme.palette.divider}`,
        marginLeft: 0,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        [theme.breakpoints.up('sm')]: {            
            flexBasis: '66.33%',
            borderLeft: `2px solid ${theme.palette.divider}`,
            borderTop: 0,
            marginLeft: theme.spacing.unit * 2,            
        },       
    },
    
    camera: {        
        padding: 0,        
        '& video': {
            maxHeight: 300
        }        
    },

    sliderContainer: {
        width: '95%',
        maxWidth: 300,
        margin: '0 auto',
        marginTop: theme.spacing.unit * 2,
    },
    slider: {
        padding: '22px 0px',
    },
    
    botones: {
        padding: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    botonCta: {        
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,        
        width: '90%',
        margin: theme.spacing.unit,
    },   
    
});

const renderHeading = (i) => {
    switch (i) {
        case 0: return 'Primera bebida';
        case 1: return 'Segunda bebida';
        case 2: return 'Tercera bebida';
        case 3: return 'Cuarta bebida';
        case 4: return 'Quinta bebida';
        default: return '';                                
    }
}

const BebidasCata = ({ classes, values, handleChangePasoActual, handleSumarProducto, handleOnDialogFoto, setFieldValue, imagenZoom, handleChangeImagenZoom }) => {   
    
    const handleChange = (results, i) => {        
        const [e] = results[0];                
        setFieldValue(`productos[${i}].imagen`, e.target.result);     
    }

    

    const handleChangeSlider = (value, i) => {
        setFieldValue(`productos[${i}].imagenZoom`, value);                
      };

    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            {                                
                values.productos
                    .sort((a, b) => a.orden - b.orden)
                    .map((e, i) =>    
                        <Grid key={i} item xs={12} className={classes.expansionContainer}>      
                            
                            <ExpansionPanel defaultExpanded className={classes.expansionPanel}>
                            
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>{renderHeading(i)}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        { 
                                            values.productos[i].nombre &&
                                                <Typography className={classes.secondaryHeading}>
                                                    {values.productos[i].nombre}
                                                </Typography>
                                        }
                                    </div>
                                </ExpansionPanelSummary>
                            
                                <ExpansionPanelDetails className={classes.details}>                                    
                                    {
                                        !e.imagen ?
                                            <Grid container direction="row" justify="center" alignItems="center" >                                                                     
                                                                                                                                                                                                                                                 
                                                <Grid item xs={12}>
                                                    <Typography variant='h5' align='center' paragraph>
                                                        Sacá una foto o elegí una imagen guardada de la bebida a catar
                                                    </Typography>
                                                </Grid>
                                                                                               

                                                <Grid item xs={12} className={classes.camera} >                                                              
                                                    <Camera
                                                        idealFacingMode='environment'                                                                                
                                                        onTakePhoto = { (dataUri) => { setFieldValue(`productos[${i}].imagen`, dataUri)} }                                                                  
                                                    />                                                                               
                                                </Grid>          
                                                
                                                <Grid item xs={12} style={{textAlign: 'center'}}>
                                                    <FileReaderInput 
                                                        onChange={(elements, results) => handleChange(results, i)}                                                                                                 
                                                    >
                                                        <Button                                                
                                                            variant="outlined" size='large' color="primary"                                                            
                                                            className={classes.botonCta} style={{maxWidth: 300, paddingTop: 8}}
                                                        >
                                                            Subir un archivo
                                                        </Button>
                                                    </FileReaderInput>                                                        
                                                </Grid>    

                                            </Grid>                                         
                                        :
                                            !e.imagenEditada ?
                                                <Grid container direction="row" justify="center" alignItems="center" >
                                                
                                                    <Grid item xs={12}>
                                                        <Typography variant='h5' align='center' gutterBottom>
                                                            Edita la imagen moviéndolas con tus dedos o el cursor del mouse.
                                                        </Typography>
                                                        <Typography variant='subtitle1' align='center' paragraph>
                                                            Usa el slider para cambiar la escala
                                                        </Typography>
                                                    </Grid>
                                                    
                                                    <Grid item xs={10} sm={8} md={6}>
                                                        <AvatarEditor
                                                            image={values.productos[i].imagen}
                                                            width={188}
                                                            height={270}
                                                            border={50}
                                                            color={[255, 255, 255, 0.6]} // RGBA                                                            
                                                            rotate={0}       
                                                            scale={imagenZoom[i]}     
                                                            style={{ width: '100%', height: 'auto',
                                                                marginTop: -10, background: '#e3e3e3', border:'1px solid #e3e3e3', borderRadius: 4}}                                        
                                                        />
                                                        <div className={classes.sliderContainer}>
                                                            <Typography id="label">Escala</Typography>
                                                            <Slider
                                                                classes={{ container: classes.slider }}
                                                                value={imagenZoom[i]}
                                                                aria-labelledby="label"
                                                                onChange={() => handleChangeImagenZoom(i)}                                                                  
                                                            />
                                                        </div>
                                                    </Grid>

                                                </Grid>
                                            :
                                                <React.Fragment>
                                                    <div className={classes.imagenContainer}>                                             
                                                        <img src={e.imagen} alt='' className={classes.imagen}/>
                                                    </div>              

                                                    <div className={classes.helper} >
                                                        <Typography variant='h5' align='center' gutterBottom>
                                                            Ingresa un nombre y un breve detalle para esta bebida.
                                                        </Typography>
                                                        <Typography variant='subtitle1' align='center' paragraph>
                                                            También podés sumar etiquetas para describirlo.
                                                        </Typography>
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].nombre`} label="Nombre de la bebida"
                                                        />                                                                                                                                                                                                    
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}multiline
                                                            name={`productos[${i}].descripcion`} label="Descripción"
                                                        />                                                                                                            
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].tipo`} label="Tag 1 (tipo)"
                                                        />                                                                
                                                        <Field                                                                                     
                                                            fullWidth type="text" component={TextField}
                                                            name={`productos[${i}].cepa`} label="Tag 2 (tipo)"
                                                        />
                                                    </div>
                                                </React.Fragment>
                                    }
                                    
                                    
                                </ExpansionPanelDetails>
                                                                
                            </ExpansionPanel>
                                                  
                        </Grid>
                )            
            }

            <Grid container direction="row" justify="center" alignItems="center"  item xs={12} className={classes.botones}>                                     
                <Grid item xs={12} sm={5} md={3}>
                    <Button                                                
                        variant="outlined" size='large' color="primary"                
                        onClick={() => handleSumarProducto()}                                            
                        className={classes.botonCta}
                    >
                        Sumar otra bebida
                    </Button>
                </Grid>
                
                <Grid item xs={12} sm={5} md={3}>
                    <Button                                                
                        variant="contained" size='large' color="primary"                
                        onClick={() => handleChangePasoActual(2)}                                            
                        className={classes.botonCta}
                    >
                        Crear cata
                    </Button>    
                </Grid>                                
            </Grid> 

        </Grid>
    );
};

BebidasCata.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,    
    handleChangePasoActual: PropTypes.func.isRequired,    
    handleSumarProducto: PropTypes.func.isRequired,  
    handleOnDialogFoto: PropTypes.func.isRequired,    
    setFieldValue: PropTypes.func.isRequired,
    imagenZoom: PropTypes.array.isRequired,
    handleChangeImagenZoom: PropTypes.func.isRequired,
};

export default withStyles(styles)(BebidasCata);