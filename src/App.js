import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

import 'animate.css';
import { Layout } from 'antd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {},
        };
    }

    getResumeData() {
        $.ajax({
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <React.StrictMode>
                <Layout className="layout">
                    <Header data={this.state.resumeData.main} />
                    {/* <About data={this.state.resumeData.main} />
                    <Resume data={this.state.resumeData.resume} />
                    <Portfolio data={this.state.resumeData.portfolio} />
                    <Contact data={this.state.resumeData.main} />
                    <Footer data={this.state.resumeData.main} /> */}
                </Layout>
            </React.StrictMode>
        );
    }
}

export default App;
