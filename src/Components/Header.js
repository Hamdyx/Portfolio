import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class Header extends Component {
    render() {
        if (!this.props.data) return null;
        const { project, github, name, description } = this.props.data;

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
                        <h3>{description}.</h3>
                        <hr />
                        <ul className="social">
                            <a href={project} className="button btn project-btn">
                                <i className="fa fa-book"></i>Project
                            </a>
                            <a href={github} className="button btn github-btn">
                                <i className="fa fa-github"></i>Github
                            </a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
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
