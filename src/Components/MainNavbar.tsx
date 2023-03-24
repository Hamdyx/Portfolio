import { Menu } from 'antd';

const MainNavbar = () => {
    const routes = [
        'home',
        'about',
        'resume',
        'portfolio',
        //  'contact'
    ];
    const navBtns = routes.map((route) => NavBtn(route));

    return (
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
    );
};

const NavBtn = (route: string) => {
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

export default MainNavbar;
