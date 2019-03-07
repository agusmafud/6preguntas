import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import FileReaderInput from 'react-file-reader-input';
import AvatarEditor from 'react-avatar-editor';
import Slider from '@material-ui/lab/Slider';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import RotateLeftIcon from '@material-ui/icons/RotateLeftRounded';
import RotateRightIcon from '@material-ui/icons/RotateRightRounded';
import CancelIcon from '@material-ui/icons/CancelOutlined';
import SaveIcon from '@material-ui/icons/AddPhotoAlternateRounded';

import withStyles from '@material-ui/core/styles/withStyles';
const styles = theme => ({        
    camera: {        
        padding: 0,        
        '& video': {
            maxHeight: 300
        }        
    },

    sliderContainer: {
        width: '95%',
        maxWidth: 350,
        margin: '0 auto',
        marginTop: theme.spacing.unit * 2,
    },
    gridItemSlider: {
        textAlign: 'center', 
        padding: '0 8px'
    },
    slider: {
        padding: '22px 0px',
    },

    iconButton: {
        fontSize: 36,
    },

    botonUpload: {        
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 1.5,        
        width: '90%',
        margin: theme.spacing.unit,
        maxWidth: 300,
    },
    botonCta: {        
        paddingTop: 0,
        paddingBottom: 0,        
        width: '90%',
        height: '100%',
        margin: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {            
            paddingTop: theme.spacing.unit * 1.5,
            paddingBottom: theme.spacing.unit * 1.5,                 
        },       
    },   
});


class SacarFoto extends Component {

    state = {                        
        imagenPrevia: '',        
        value: 1.2,        
        rotacion: 0
    };
    handleImagenTomada = (dataUri) => {
        this.setState({ imagenPrevia: dataUri });
        
    };
    handleSubirArchivo = (event, results) => {
        const [e] = results[0];                
        this.setState({ imagenPrevia: e.target.result });        
    }
    handleChangeZoom = (event, value) => {                
        this.setState({ value });
    };
    handleRotarIzquierda = () => {         
        this.setState((prevState) => ({ rotacion: prevState.rotacion - 90 }));        
    };
    handleRotarDerecha = (event, value) => {                
        this.setState((prevState) => ({ rotacion: prevState.rotacion + 90 }));
    };
    handleUndoImage = () => {
        this.setState({ imagenPrevia: '' });        
        this.setState({ value: 1.2 });
        this.setState({ rotacion: 0 });
    }
    handleSaveImage = (setFieldValue, posicion, imagen) => {        
        if (this.editor) {            
            setFieldValue(`productos[${posicion}].imagen`, this.editor.getImageScaledToCanvas().toDataURL());
        }
    }
    
    setEditorRef = (editor) => this.editor = editor

    render() {                        
        const { classes, posicion, setFieldValue } = this.props;
        const { imagenPrevia, value, rotacion } = this.state;

        return (            
            !imagenPrevia ?

                <Grid container direction="row" justify="center" alignItems="center" >                                                                     
                                                                                                                                                                                                                        
                    <Grid item xs={12}>
                        <Zoom>
                            <Typography variant='h5' align='center' paragraph>
                                Sacá una foto o elegí una imagen guardada de la bebida a catar
                            </Typography>
                        </Zoom>
                    </Grid>
                                                                    

                    <Grid item xs={12} className={classes.camera} >                                                              
                        <Fade>
                            <Camera
                                idealFacingMode='environment'                                                                                
                                onTakePhoto = { (dataUri) => {this.handleImagenTomada(dataUri)} }                                                                                               
                            />    
                        </Fade>                                                                           
                    </Grid>          
                    
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <FileReaderInput 
                            onChange={this.handleSubirArchivo}                                                                                                 
                        >
                            <Button                                                
                                variant="outlined" size='large' color="primary"                                                            
                                className={classes.botonUpload}
                            >
                                Subir un archivo
                            </Button>
                        </FileReaderInput>                                                        
                    </Grid>    

                </Grid>                                         
            :                     
                <Grid container direction="row" justify="center" alignItems="center" >
                
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' gutterBottom>
                            Edita la imagen moviéndola con tus dedos o el cursor del mouse.
                        </Typography>
                        <Typography variant='subtitle1' align='center' paragraph>
                            Usa el slider para cambiar la escala
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={10} sm={6}>
                        <AvatarEditor
                            ref={this.setEditorRef}
                            image={imagenPrevia}
                            width={188}
                            height={270}
                            border={50}
                            color={[255, 255, 255, 0.8]} // RGBA                                                            
                            rotate={rotacion}       
                            scale={value}     
                            style={{ width: '100%', height: 'auto',
                                marginTop: -10, background: '#e3e3e3', border:'1px solid #e3e3e3', borderRadius: 4}}                                        
                        />
                        <Grid container alignItems='flex-start' justify='center' className={classes.sliderContainer}>
                            <Grid item xs={12} sm={6} className={classes.gridItemSlider}>
                                <Typography align='center' id="escala">Escala</Typography>
                                <Slider
                                    classes={{ container: classes.slider }}
                                    value={value}
                                    min={0.8}
                                    max={2.4}
                                    aria-labelledby="escala"
                                    onChange={this.handleChangeZoom}                                                                  
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.gridItemSlider}>
                                <Typography align='center'>Rotar imagen</Typography>
                                <IconButton onClick={this.handleRotarIzquierda} color="primary">
                                    <RotateLeftIcon  className={classes.iconButton} />
                                </IconButton>
                                <IconButton onClick={this.handleRotarDerecha} color="primary">
                                    <RotateRightIcon className={classes.iconButton} />
                                </IconButton>
                            </Grid>
                        </Grid>                        
                    </Grid>

                    <Grid container justify="center" alignItems="stretch" style={{textAlign:'center', marginBottom: 16}}>                                     
                        <Grid item xs={6}>
                            <Button                 
                                onClick={this.handleUndoImage}                               
                                variant="outlined" size='large' color="primary"                                                                                            
                                className={classes.botonCta}
                            >
                            <CancelIcon style={{marginRight: 8}}/>
                                Cancelar
                            </Button>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Button                                                
                                onClick={() => this.handleSaveImage(setFieldValue, posicion, imagenPrevia)}
                                variant="contained" size='large' color="primary"                                                
                                className={classes.botonCta}
                            >
                                <SaveIcon style={{marginRight: 8}} />
                                Guardar imagen
                            </Button>    
                        </Grid>                                
                    </Grid> 

                </Grid>
                    
        
        );
    }
}

SacarFoto.propTypes = {
    posicion: PropTypes.number.isRequired,
    setFieldValue: PropTypes.func.isRequired,
};

export default withStyles(styles)(SacarFoto);