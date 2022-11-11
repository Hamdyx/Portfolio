import React from 'react';
import ParticlesBg from 'particles-bg';
import { Layout, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import SocialLinks from './SocialLinks';
const { Header: AntHeader } = Layout;

const Header = ({ data }) => {
    const { name, description, social } = data;
    const routes = ['home', 'about', 'resume', 'portfolio', 'contact'];
    const navBtns = routes.map((route) => NavBtn(route));

    return (
        <AntHeader id="home">
            <ParticlesBg type="cobweb" bg={true} />
            <nav id="nav-wrap">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
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
                    <SocialLinks socials={social} />
                </div>
            </div>
            <a href="#contact" aria-label="scroll-down" className="scrolldown">
                <CaretDownOutlined />
            </a>
        </AntHeader>
    );
};

const NavBtn = (route) => {
    return {
        key: route,
        label: (
            <a href={`#${route}`} className="custom_button_border nav-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {route}
            </a>
        ),
    };
};

export default Header;
