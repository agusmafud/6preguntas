import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import Hero from './Hero';
import CtaCatas from './CtaCatas';

const Home = ({ menu, toggleMenu, handleResponderEjemploClick, handleResultadosEjemploClick, 
    handleCrearCataClick, handleAcercaDeClick }) => {
    return (
        <React.Fragment>

            <Menu
                menu={menu}
                toggleMenu={toggleMenu}
                handleCrearCataClick={handleCrearCataClick}
             />
            
            <Hero 
                handleResponderEjemploClick={handleResponderEjemploClick}
                handleResultadosEjemploClick={handleResultadosEjemploClick}
            />
            
            <CtaCatas
                handleCrearCataClick={handleCrearCataClick}
            />
            

        </React.Fragment>
    );
};

Home.propTypes = {
    menu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    handleResponderEjemploClick: PropTypes.func.isRequired,
    handleResultadosEjemploClick: PropTypes.func.isRequired,
    handleCrearCataClick: PropTypes.func.isRequired,
    handleAcercaDeClick: PropTypes.func.isRequired,
};

export default Home;