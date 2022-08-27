import React, { Component, useState } from 'react';
import { Button, Figure, Image, Modal } from 'react-bootstrap';

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projectsDev = this.props.data.projects.map((project, i) => {
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
}

const ProjectModal = ({ project }) => {
    const [show, setShow] = useState(false);
    const { title, details, image } = project;
    let projectImage = 'images/portfolio/' + image;

    const handleModalShow = () => setShow(true);

    const handleModalClose = () => setShow(false);

    return (
        <div className="portfolio-item">
            <span></span>
            <Figure className="item-wrap">
                <Button className="portfolioImg-btn" onClick={handleModalShow}>
                    <Figure.Image
                        src={projectImage}
                        alt={title}
                        width="100%"
                        height="100%"
                    />
                </Button>
                <Figure.Caption style={{ textAlign: 'center' }}>
                    {project.title}
                </Figure.Caption>
                <Modal show={show} onHide={handleModalClose} className="project-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{project.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={projectImage} alt={title} width="75%" height="50%" />
                        <p>{details}</p>
                    </Modal.Body>
                </Modal>
            </Figure>
        </div>
    );
};

export default Portfolio;
