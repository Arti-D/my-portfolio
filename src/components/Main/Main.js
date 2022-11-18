import React from 'react';
import Promo from './Promo/Promo.js';
import AboutMe from './AboutMe/AboutMe.js';
import Techs from './Techs/Techs.js';
import Portfolio from './Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js'
function Main() {
    return (
        <section className="component">
            <Promo />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </section>
    );
}

export default Main;
