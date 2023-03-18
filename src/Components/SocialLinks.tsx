import React from 'react';
import Icons from '../assets/icons';
import { Social } from '../types';

function SocialLinks({ socials }: { socials: Social[] }) {
    const networks = socials.map((network) => {
        const IconEl = (Icons as any)[network.name];

        return (
            <li key={network.name}>
                <a
                    href={network.url}
                    aria-label={network.name}
                    target="_blank"
                    rel="noreferrer"
                >
                    <IconEl />
                </a>
            </li>
        );
    });

    return <ul className="social_links">{networks}</ul>;
}

export default SocialLinks;
