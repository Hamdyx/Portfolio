import React, { Component, useState } from 'react';
import Zmage from 'react-zmage';
import { Button, Figure, Image, Modal } from 'react-bootstrap';

let id = 0;
class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projectsDev = this.props.data.projects.map((project, i) => {
            return <ProjectModal key={i} project={project} />;
        });

        return (
            <section id="portfolio">
                <div className="row animate__animated animate__fadeInLeft">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {projectsDev}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

// @bug Zmage
// when img is in full-screen then closed
// it leaves a figue div with z-index 1000
// @fix replaced Zmage with bootstrap modal

const ProjectModal = ({ project }) => {
    const [show, setShow] = useState(false);
    const { title, details, image } = project;
    let projectImage = 'images/portfolio/' + image;

    const handleModalShow = () => setShow(true);

    const handleModalClose = () => setShow(false);

    return (
        <div key={id++} className="columns portfolio-item">
            <div className="item-wrap">
                <Figure>
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
                    <Modal
                        show={show}
                        onHide={handleModalClose}
                        className="project-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{project.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image
                                src={projectImage}
                                alt={title}
                                width="75%"
                                height="50%"
                            />
                            <p>{details}</p>
                        </Modal.Body>
                    </Modal>
                </Figure>
            </div>
        </div>
    );
};

export default Portfolio;
