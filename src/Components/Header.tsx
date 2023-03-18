import ParticlesBg from 'particles-bg';
import { CaretDownOutlined } from '@ant-design/icons';
import { MainProps } from '../types';
import SocialLinks from './SocialLinks';

function Header({ data }: { data: MainProps }) {
    const { name, description, social } = data;

    return (
        <section id="home">
            <ParticlesBg type="cobweb" bg={true} />
            <div className="row banner">
                <div className="banner-text">
                    <h1>{name}</h1>
                    <h2>{description}.</h2>
                    <hr />
                    <SocialLinks socials={social} />
                </div>
            </div>
            <a href="#portfolio" aria-label="scroll-down" className="scrolldown">
                <CaretDownOutlined />
            </a>
        </section>
    );
}

export default Header;
