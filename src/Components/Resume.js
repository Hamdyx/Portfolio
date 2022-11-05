import { Divider, Space } from 'antd';
import React from 'react';
import Icons from '../assets/icons.ts';
const Resume = ({ data }) => {
    const { skillmessage, education, work, skills } = data
    const educationItems = education.map((education) => {
        return (
            <Space key={education.school} direction='vertical' size={5}>
                <h2>{education.school}</h2>
                <p className="info">
                    {education.degree} <span>&bull;</span>
                    <em className="date">{education.graduated}</em>
                </p>
                <p className="details">{education.description}</p>
            </Space>
        );
    });

    const workItems = work.map((work) => {
        const { company, title, years, description } = work;
        return (
            <Space key={company} direction='vertical' size={5}>
                <h2>{title}</h2>
                <p className="info">
                    {company}
                    <span>&bull;</span> <em className="date">{years}</em>
                </p>
                <p className="details">{description}</p>
            </Space>
        );
    });

    const skillsItems = skills.map((skills) => {
        const { name } = skills;
        const iconName = name.toLowerCase();
        const IconEl = Icons[iconName];
        return (
            <li key={name} className={iconName}>
                <IconEl />
                <em>{name}</em>
            </li>
        );
    });

    return (
        <section id="resume">
            <Space direction='vertical' size={15} className='resume_section'>
                <Divider orientation="left">
                    <h1>
                        <span>Education</span>
                    </h1>
                </Divider>
                <Space direction='vertical' size={10}>
                    {educationItems}
                </Space>
            </Space>

            <Space direction='vertical' size={15} className='resume_section'>
                <Divider orientation="left">
                    <h1>
                        Work
                    </h1>
                </Divider>
                <Space direction='vertical' size={10}>
                    {workItems}
                </Space>
            </Space>

            <Space direction='vertical' size={15} className='resume_section'>
                <Divider orientation="left">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </Divider>
                <Space direction='vertical' size={10}>
                    <p className="details">
                        {skillmessage}
                    </p>
                    <ul className="skills">
                        {skillsItems}
                    </ul>
                </Space>
            </Space>
        </section>
    );
};

export default Resume;
