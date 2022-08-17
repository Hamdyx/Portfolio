import React, { Component } from 'react';
import Icons from '../assets/icons.ts';
// src/assets/icons.ts
class Resume extends Component {
    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        if (!this.props.data) return null;

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map(function (education) {
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

        const work = this.props.data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h2>{work.title}</h2>
                    <p className="info">
                        {work.company}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p className="details">{work.description}</p>
                </div>
            );
        });

        const skills = this.props.data.skills.map((skills) => {
            const iconName = skills.name.toLowerCase();
            console.log('iconName', iconName);
            const IconEl = Icons[iconName];
            return (
                <li key={skills.name} className={iconName}>
                    <IconEl />
                    <em>{skills.name}</em>
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
    }
}

export default Resume;
