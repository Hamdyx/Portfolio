import React, { Component } from 'react';

class Footer extends Component {
    render() {
        if (!this.props.data) return null;

        const networks = this.props.data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url} aria-label={network.name}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns animate__animated animate__fadeInDown">
                        <ul className="social-links">{networks}</ul>

                        <ul className="copyright">
                            <li>&copy; Copyright 2021 Nordic Giant</li>
                            <li>
                                Design by{' '}
                                <a title="Styleshout" href="http://www.styleshout.com/">
                                    Styleshout
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
