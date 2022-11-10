import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
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
            {/* <Container></Container> */}
            <Row>
                <Col span={16} className="animate__animated animate__fadeInLeft">
                    <form
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
                    <Form
                        // action=""
                        // method="post"
                        id="contactForm"
                        name="contactForm"
                        // name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="contactName"
                            rules={[{
                                required: true
                                // message: 'Please input your username!' 
                            }]}
                        >
                            <Input id="contactName" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="contactEmail"
                            rules={[{
                                required: true
                                // message: 'Please input your username!' 
                            }]}
                        >
                            <Input id="contactEmail" />
                        </Form.Item>
                        <Form.Item
                            label="Subject"
                            name="contactSubject"
                            rules={[{
                                // required: true
                                // message: 'Please input your username!' 
                            }]}
                        >
                            <Input id="contactSubject" />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="contactMessage"
                            cols="50"
                            rows="15"
                            rules={[{
                                required: true
                                // message: 'Please input your username!' 
                            }]}
                        >
                            <Input.TextArea id="contactMessage" />
                        </Form.Item>
                        <Button className="submit">Submit</Button>
                    </Form>

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
        </section>
    );
}

export default Contact;
