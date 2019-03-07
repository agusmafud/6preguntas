import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PreguntasListItemButton from './PreguntasListItemButton';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';

import { Line } from 'rc-progress';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({           
    pregunta: {
        marginBottom: theme.spacing.unit * 5
    },
    label: {
        margin: 0,        
    },
    labelText: {
        fontSize: 10,
    },
    botonContainer: {               
        textAlign: 'center', 
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },   
    respuestaPuntaje: {
        width: '100%',
        minWidth: 200, 
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,     
        strokeWidth: 6,  
    },
    field: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    radio: {
        width: '100%',
        margin:0,
        padding: theme.spacing.unit,
    },
    formControlLabel: {
        margin:0,        
        flexBasis:'25%', 
        [theme.breakpoints.up('sm')]: {            
            flexBasis:'14%', 
        },         
    }
});

const getTitle = (numeroPregunta) => {
    switch (numeroPregunta) {
        case 1: return 'Fase visual';
        case 2: return 'Fase olfativa - Intensidad';
        case 3: return 'Fase olfativa - Calidad';
        case 4: return 'Fase gustativa - Intensidad';
        case 5: return 'Fase gustativa - Calidad';
        case 6: return 'Armonía';        
        default: return 'Fase visual';
    }
}

const getDescripcion = (numeroPregunta) => {
    switch (numeroPregunta) {
        case 1: return 'Incliná la copa sobre un fondo blanco. Observá el color, el tono, la intensidad. Girá la copa para que se formen las piernas y analizá el cuerpo, la textura y la graduación alcohólica de la bebida.';
        case 2: return 'Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. ';
        case 3: return 'Descripción pendiente. Descripción pendiente. Descripción pendiente. ';
        case 4: return 'Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente.';
        case 5: return 'Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. ';
        case 6: return 'Descripción pendiente. Descripción pendiente. Descripción pendiente. Descripción pendiente. ';        
        default: return 'Fase visual';
    }
}

const getRespuestaPregunta = (respuestasProducto, numeroPregunta) => {
    switch (numeroPregunta) {
        case 1: return respuestasProducto.preg1;
        case 2: return respuestasProducto.preg2;
        case 3: return respuestasProducto.preg3;
        case 4: return respuestasProducto.preg4;
        case 5: return respuestasProducto.preg5;
        case 6: return respuestasProducto.preg6;                     

        default: return respuestasProducto.preg1;
    }
}

const getFieldName = (orden,numeroPregunta) => {
    return `respuestasCata[${orden}].preg${numeroPregunta}`;
}

const scrollToNext = (preguntaActual, respuestasProducto) => {    
    /* SCROLL A LA PRÓXIMA PREGUNTA SIN RESPONDER */
    let siguientePregunta = preguntaActual + 1;        
    while (siguientePregunta <= 6) {
        if ( getRespuestaPregunta(respuestasProducto, siguientePregunta) === '-1' ) {            
            let element = document.getElementById(`pregunta${siguientePregunta}`);   
            element.scrollIntoView({block: "center", behavior: "smooth"});            
            return;
        }
        siguientePregunta++;        
    }    
    /* SI SE OMITIÓ ALGUNA PREGUNTA, SCROLL A LA MISMA */
    siguientePregunta = 1;    
    while (siguientePregunta <= 6) {
        if ( getRespuestaPregunta(respuestasProducto, siguientePregunta) === '-1' ) {
            let element = document.getElementById(`pregunta${siguientePregunta}`);   
            element.scrollIntoView({block: "center", behavior: "smooth"});
            return;
        }
        siguientePregunta++;
    }    
    /* SCROLL A BOTÓN DE AVANZR */
    let element = document.getElementById(`botonContinuar`);   
    element.scrollIntoView({block: "start", behavior: "smooth"});    
}

const PreguntasListItem = ({ classes, resultados, numeroPregunta, respuestasProducto }) => {
        
    return (
        resultados ? 
            <Grid container direction='row' justify="center" alignItems="center" className={classes.pregunta}>
                <Grid item xs={12}>
                    <Typography                         
                        align='center' gutterBottom
                        variant='h5' color='primary'
                    >
                        {getTitle(numeroPregunta)}                    
                    </Typography>                                                    
                </Grid>         

                {
                    getRespuestaPregunta(respuestasProducto, numeroPregunta) !== -1 ?
                        <React.Fragment>
                            <Grid item xs={12}>
                                <Typography                         
                                    align='right' gutterBottom variant='h6' color='primary'
                                    style={{
                                        width: `${getRespuestaPregunta(respuestasProducto, numeroPregunta) * 16.67}%`, 
                                        minWidth: 100, marginTop: 12, marginBottom: 0, fontSize: 16
                                    }}
                                >
                                    {`Tu voto: ${getRespuestaPregunta(respuestasProducto, numeroPregunta)} puntos`}                                    
                                </Typography>  
                            </Grid>   
                                
                            <Line 
                                percent={getRespuestaPregunta(respuestasProducto, numeroPregunta) * 16.67}                                                 
                                strokeColor='#9c27b0'
                                className={classes.respuestaPuntaje}  
                                strokeWidth={ 6 }                  
                            />
                        </React.Fragment>
                    :
                        <Grid item xs={12}>
                            <Typography                         
                                align='left' gutterBottom variant='h6' color='primary'
                                style={{ marginTop: 12, marginBottom: 0, fontSize: 16 }}
                            >
                                No votaste
                            </Typography>  
                        </Grid>
                }   
                
                <Line 
                    percent={80}                                                 
                    strokeColor='#e040fb'
                    className={classes.respuestaPuntaje}                    
                    trailColor='#fff'
                    strokeWidth={ 3 }
                />                                                
                <Grid item xs={12}>
                    <Typography                         
                        align='right' gutterBottom variant='caption'
                        style={{width: '80%', minWidth: 100}}
                    >
                        Promedio de la gente: 80%
                    </Typography>  
                </Grid>     
            </Grid>
        :                   
            <Grid container direction='row' justify="center" alignItems="center" className={classes.pregunta}>
                <Grid item xs={12}>                
                    <Typography                                                      
                        id={`pregunta${numeroPregunta}`}
                        align='center' gutterBottom
                        variant='h5'
                        color={ (getRespuestaPregunta(respuestasProducto, numeroPregunta) === '-1') ? 
                            'primary' : 'textSecondary' }
                    >
                        {getTitle(numeroPregunta)}                    
                    </Typography>
                    
                    {
                        getRespuestaPregunta(respuestasProducto, numeroPregunta) === '-1' &&                    
                        <Typography variant='body1' align='justify' paragraph>
                            {getDescripcion(numeroPregunta)}    
                        </Typography>
                    }                
                </Grid>         
                
                
                                                        
                <Grid item xs={12} md={10}>
                    <Field 
                        className={classes.field}
                        name={getFieldName(respuestasProducto.orden,numeroPregunta)} component={RadioGroup} 
                    >
                        {
                            [...Array(7)].map((e, i) => 
                                <FormControlLabel
                                    onClick={() => scrollToNext(numeroPregunta, respuestasProducto)}
                                    key={i}
                                    className={classes.formControlLabel}
                                    value={i.toString()}
                                    control=
                                        { 
                                            <Radio
                                                className={classes.radio}                                             
                                                icon={ 
                                                    <PreguntasListItemButton                                                             
                                                        valor={i} selected={false} 
                                                        focus={getRespuestaPregunta(respuestasProducto, numeroPregunta) === '-1'} 
                                                    /> }
                                                checkedIcon={ 
                                                    <PreguntasListItemButton 
                                                        valor={i} selected 
                                                        focus={getRespuestaPregunta(respuestasProducto, numeroPregunta) === '-1'} 
                                                    /> }
                                            /> 
                                        }
                                />                                            
                            )        
                        }                                                                           
                    </Field>  
                </Grid>
                                                                                    
                {
                    getRespuestaPregunta(respuestasProducto, numeroPregunta) === '-1' &&                    
                        <Grid item xs={12}>
                            <Typography color='primary' variant='caption' align='center'>
                                '+ 0' es el valor más bajo correspondiendo a 'Muy malo', y '+ 6' lo más alto posible, 'Excelente'
                            </Typography>               
                        </Grid>
                }                              
                                                                    
            </Grid>
    );
};

PreguntasListItem.propTypes = {   
    classes: PropTypes.object.isRequired,    
    resultados: PropTypes.bool.isRequired,
    numeroPregunta: PropTypes.number.isRequired,
    respuestasProducto: PropTypes.object.isRequired,        
};

export default withStyles(styles)(PreguntasListItem);