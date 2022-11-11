import React from 'react';
import Icons from '../assets/icons.ts';

const SocialLinks = ({ socials }) => {
    const networks = socials.map((network) => {
        const IconEl = Icons[network.name];

        return (
            <li key={network.name}>
                <a href={network.url} aria-label={network.name}>
                    <IconEl />
                </a>
            </li>
        );
    });

    return (
        <ul className="social_links">{networks}</ul>
    );
};

export default SocialLinks;
