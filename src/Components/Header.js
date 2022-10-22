import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Icons from '../assets/icons.ts';

class Header extends Component {
    render() {
        if (!this.props.data) return null;
        const { name, description, social } = this.props.data;
        const networks = social.map((network) => {
            const IconEl = Icons[network.name];

            return (
                <li key={network.name}>
                    <a href={network.url} aria-label={network.name}>
                        {/* <i className={network.className}></i> */}
                        <IconEl />
                    </a>
                </li>
            );
        });

        const routes = ['home', 'about', 'resume', 'portfolio', 'contact'];

        const navBtns = routes.map((route) => <NavBtn key={route} route={route} />);

        return (
            <header id="home">
                <ParticlesBg type="cobweb" bg={true} />

                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        {navBtns}
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1>{name}</h1>
                        <h2>{description}.</h2>
                        <hr />
                        <ul className="social">{networks}</ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about" aria-label="scroll-down">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

const NavBtn = ({ route }) => {
    return (
        <li className={route === 'home' ? 'current' : ''}>
            <a href={`#${route}`} className="nav-btn smoothscroll">
                <span></span>
                <span></span>
                <span></span>
                <span></span> {route}
            </a>
        </li>
    );
};

export default Header;
