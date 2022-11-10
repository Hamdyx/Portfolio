import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
const Contact = ({ data }) => {
    const { name, phone, address, contactmessage } = data;
    const { city, country } = address;
    return (
        <section id="contact">
            <div className="section-head animate__animated animate__fadeInDown">
                <div className="header-col">
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div >
                    <p className="lead">
                        <MdEmail />
                        {contactmessage}
                    </p>
                </div>
            </div>
            <Container>
                <Row >
                    <Col lg={8} className="animate__animated animate__fadeInLeft">
                        <form
                            action=""
                            method="post"
                            id="contactForm"
                            name="contactForm"
                        >
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">
                                        Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactName"
                                        name="contactName"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">

                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactEmail"
                                        name="contactEmail"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactSubject"
                                        name="contactSubject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea
                                        cols="50"
                                        rows="15"
                                        id="contactMessage"
                                        name="contactMessage"
                                    ></textarea>
                                </div>

                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent,
                            thank you!
                            <br />
                        </div>
                    </Col>
                    <aside className="animate__animated animate__fadeInRight">
                        <div className="">
                            <h2>Address and Phone</h2>
                            <p className="address">
                                {name}
                                <br />
                                {`${city}, ${country}`}
                                <br />
                                <span>{phone}</span>
                            </p>
                        </div>
                    </aside>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
