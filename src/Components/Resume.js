import React from 'react';
import Icons from '../assets/icons.ts';
const Resume = ({ data }) => {
    if (!data) return null;

    const skillmessage = data.skillmessage;
    const education = data.education.map(function (education) {
        return (
            <div key={education.school}>
                <h2>{education.school}</h2>
                <p className="info">
                    {education.degree} <span>&bull;</span>
                    <em className="date">{education.graduated}</em>
                </p>
                <p className="details">{education.description}</p>
            </div>
        );
    });

    const work = data.work.map((work) => {
        const { company, title, years, description } = work;
        return (
            <div key={company}>
                <h2>{title}</h2>
                <p className="info">
                    {company}
                    <span>&bull;</span> <em className="date">{years}</em>
                </p>
                <p className="details">{description}</p>
            </div>
        );
    });

    const skills = data.skills.map((skills) => {
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
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{education}</div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className="nine columns main-col">{work}</div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <p className="details">{skillmessage}</p>
                    <ul className="skills">{skills}</ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;
