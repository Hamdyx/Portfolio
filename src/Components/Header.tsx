import ParticlesBg from 'particles-bg';
import { CaretDownOutlined } from '@ant-design/icons';
import { Social } from '../types';
import SocialLinks from './SocialLinks';

function Header({ info }: { info: { name: string; title: string; socials: Social[] } }) {
    const { name, title, socials } = info;
    console.log({
        info,
        name,
        title,
        socials,
    });

    return (
        <section id="home">
            <ParticlesBg type="cobweb" bg={true} />
            <div className="row banner">
                <div className="banner-text">
                    <h1>{name}</h1>
                    <h2>{title}.</h2>
                    <hr />
                    <SocialLinks socials={socials} />
                </div>
            </div>
            <a href="#portfolio" aria-label="scroll-down" className="scrolldown">
                <CaretDownOutlined />
            </a>
        </section>
    );
}

export default Header;
