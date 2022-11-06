import React, { useState } from 'react';
import { Card, Image, Modal } from 'antd';
const { Meta } = Card;

const Portfolio = ({ data }) => {
    const projectsDev = data.projects.map((project, i) => {
        return <ProjectModal key={i} project={project} />;
    });

    return (
        <section id="portfolio">
            <div className="portfolio_container animate__animated animate__fadeInLeft">
                <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper">{projectsDev}</div>
            </div>
        </section>
    );
}

const ProjectModal = ({ project }) => {
    const [show, setShow] = useState(false);
    const { title, details, url, image } = project;
    let projectImage = 'images/portfolio/' + image;

    const handleModalShow = () => setShow(true);

    const handleModalClose = () => setShow(false);

    return (
        <div className="portfolio-item">
            <span></span>
            <Card
                hoverable
                cover={<img alt={title} src={projectImage} className="portfolioImg-btn" />}
                className="item-wrap"
                onClick={handleModalShow}
            >
                <Meta title={title} description="www.instagram.com" />
            </Card>
            <Modal
                title={title}
                centered
                open={show}
                onOk={handleModalShow}
                onCancel={handleModalClose}
                className="project_modal"
                footer={null}
            >
                <Image src={projectImage} alt={title} width="75%" height="50%" />
                <a href={url}>{url}</a>
                <p>{details}</p>
            </Modal>
        </div>
    );
};

export default Portfolio;
