import { Avatar, Image, Space } from 'antd';
import React from 'react';

const About = ({ data }) => {
    if (!data) return null;
    const { name, bio, phone, email, address } = data;
    const { country, city } = address;
    const profilepic = `images/${data.image}`;
    const resumeDownload = `/${data.resumedownload}`;

    return (
        <section id="about">
            <Space size={[100, 50]} className="animate__animated animate__fadeIn">
                <div>
                    <Avatar
                        size={{ xs: 100, sm: 140, md: 120, lg: 140, xl: 180, xxl: 200 }}
                        icon={<Image
                            width="100%"
                            height="100%"
                            src={profilepic}
                            alt="Profile Pic"
                            preview={false}
                        />}
                    />
                </div>
                <Space direction="vertical" size={30}>
                    <div>
                        <h2>About Me</h2>
                        <p>{bio}</p>
                    </div>
                    <Space size={[75, 30]} className="contact_details">
                        <div>
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
                        <a href={resumeDownload} className="button-liquid">
                            <span>Resume</span>
                            <div className="liquid"></div>
                        </a>
                    </Space>
                </Space>
            </Space>
        </section>
    );
};

export default About;
