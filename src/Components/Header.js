import React from 'react';
import ParticlesBg from 'particles-bg';
import Icons from '../assets/icons.ts';
import { Layout, Menu } from 'antd';
const { Header: AntHeader } = Layout;

const Header = ({ data }) => {
    if (!data) return null;
    const { name, description, social } = data;
    const networks = social.map((network) => {
        const IconEl = Icons[network.name];

        return (
            <li key={network.name}>
                <a href={network.url} aria-label={network.name}>
                    <IconEl />
                </a>
            </li>
        );
    });

    const routes = ['home', 'about', 'resume', 'portfolio', 'contact'];

    const navBtns = routes.map((route) => NavBtn({ key: route, route: route }));

    return (
        <AntHeader id="home">
            <ParticlesBg type="cobweb" bg={true} />
            <nav id="nav-wrap">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={navBtns}
                    id="nav"
                    className="nav"
                    rootClassName="nav_menu"
                />
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
        </AntHeader>
    );
};

const NavBtn = ({ route, key }) => {
    return {
        key,
        label: (
            <a href={`#${route}`} className="custom_button_border nav-btn smoothscroll">
                <span></span>
                <span></span>
                <span></span>
                <span></span> {route}
            </a>
        ),
    };
};

export default Header;
