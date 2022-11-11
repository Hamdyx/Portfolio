import { Button, Form, Input, Space } from 'antd';
import React from 'react';
import { MdEmail } from 'react-icons/md';
const Contact = ({ data }) => {
    const [form] = Form.useForm()
    const { name, phone, address, contactmessage } = data;
    const { city, country } = address;
    return (
        <section id="contact">
            <div className="section-head animate__animated animate__fadeInDown">
                <p className="lead">
                    <MdEmail />
                    {contactmessage}
                </p>
            </div>
            <Space align='baseline' size={0} className='form_wrapper'>
                <Form
                    id="contactForm"
                    name="contactForm"
                    form={form}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 12 }}
                    initialValues={{ remember: true }}
                    className="animate__animated animate__fadeInLeft"
                >
                    <Form.Item
                        label="Name"
                        name="contactName"
                        rules={[{
                            required: true
                        }]}
                    >
                        <Input id="contactName" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="contactEmail"
                        rules={[{
                            required: true
                        }]}
                    >
                        <Input id="contactEmail" />
                    </Form.Item>
                    <Form.Item
                        label="Subject"
                        name="contactSubject"
                    >
                        <Input id="contactSubject" />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        name="contactMessage"
                        wrapperCol={{
                            span: 14,
                        }}
                        rules={[{
                            required: true
                        }]}
                    >
                        <Input.TextArea
                            rows={12}
                            id="contactMessage" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            span: 3,
                            offset: 15,
                        }}>
                        <Button type="primary" className="submit" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
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
            </Space>
        </section>
    );
}

export default Contact;
