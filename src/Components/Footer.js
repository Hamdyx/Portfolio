import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = ({ data }) => {
    return (
        <footer>
            <SocialLinks socials={data.social} />
        </footer>
    );
}

export default Footer;
