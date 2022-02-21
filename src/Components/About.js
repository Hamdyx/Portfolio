import React, { Component } from 'react';

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const { name, bio, phone, email, address } = this.props.data;
        const { country, city } = address;
        const profilepic = `images/${this.props.data.image}`;
        const resumeDownload = `/${this.props.data.resumedownload}`;

        return (
            <section id="about">
                <div className="row animate__animated animate__fadeIn">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src={profilepic}
                            alt="Nordic Giant Profile Pic"
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span>
                                    <br />
                                    <span>{`${city}, ${country}`}</span>
                                    <br />
                                    <span>{phone}</span>
                                    <br />
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <a href={resumeDownload} className="button-liquid">
                                    <span>Resume</span>
                                    <div className="liquid"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
