import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Home from '../components/Home';

class HomeContainer extends Component {

    state = {menu: false, };    
    toggleMenu = (open) => () => {
        this.setState({ menu: open });
    };
    

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    handleResponderEjemploClick = () => {
        this.props.history.push('/cata/123456');
    }
    handleResultadosEjemploClick = () => {
        this.props.history.push('/cata/123456/resultados');
    }
    handleCrearCataClick = () => {
        this.props.history.push('/crear');
    }
    handleAcercaDeClick = () => {
        this.props.history.push('/acercade');
    }

    render() {
        return (
            <Home 
                menu={this.state.menu}
                toggleMenu={this.toggleMenu}
                handleResponderEjemploClick={this.handleResponderEjemploClick}
                handleResultadosEjemploClick={this.handleResultadosEjemploClick}
                handleCrearCataClick={this.handleCrearCataClick}
                handleAcercaDeClick={this.handleAcercaDeClick}
            />
        );
    }
}

export default withRouter(HomeContainer);