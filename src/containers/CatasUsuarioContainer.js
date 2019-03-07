import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import CatasUsuarioLayout from '../components/CatasUsuario/CatasUsuarioLayout';

class CatasUsuarioContainer extends Component {

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>          
                    <title>Tus catas</title>                    
                </Helmet>
                <CatasUsuarioLayout />
            </React.Fragment>            
        );
    }
}

CatasUsuarioContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default withRouter(CatasUsuarioContainer);