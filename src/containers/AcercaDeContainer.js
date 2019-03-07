import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import AcercaDeLayout from '../components/AcercaDe/AcercaDeLayout';

class AcercaDeContainer extends Component {

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <AcercaDeLayout />
        );
    }
}

export default withRouter(AcercaDeContainer);