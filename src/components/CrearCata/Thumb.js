import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumb extends Component {

    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.imagen) 
            { return; }
    
        this.setState({ loading: true }, () => {
            let reader = new FileReader();
            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };
            reader.readAsDataURL(nextProps.imagen);
        });
    }


    render() {
        const { imagen } = this.props;
        const { loading, thumb } = this.state;
    
        if (!imagen) { return null; }
    
        if (loading) { return <p>Cargando imagen...</p>; }
    
        return (
            <img src={thumb}
                alt={imagen.name}            
                height={200}
                width={200} 
            />
        );
    }
}

Thumb.propTypes = {
    imagen: PropTypes.string,
};

export default Thumb;