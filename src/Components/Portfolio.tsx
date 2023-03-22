import { useState } from 'react';
import { Card, Image, Modal } from 'antd';
import { Project } from '../types';
const { Meta } = Card;

const Portfolio = ({ projects }: { projects: Project[] }) => {
    const projectsDev = projects.map((project, i) => {
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
};

const ProjectModal = ({ project }: { project: Project }) => {
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
                cover={
                    <Image
                        alt={title}
                        src={projectImage}
                        className="portfolioImg-btn"
                        preview={false}
                    />
                }
                className="item-wrap"
                onClick={handleModalShow}
            >
                <Meta title={title} />
            </Card>
            <Modal
                title={
                    <a href={url} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                }
                centered
                open={show}
                onOk={handleModalShow}
                onCancel={handleModalClose}
                className="project_modal"
                width={1000}
                footer={null}
            >
                <Image
                    src={projectImage}
                    alt={title}
                    width="100%"
                    height="50%"
                    preview={false}
                />
                <p>{details}</p>
            </Modal>
        </div>
    );
};

export default Portfolio;
