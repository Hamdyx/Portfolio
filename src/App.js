import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { CaretUpFilled } from '@ant-design/icons';

import { BackTop, Layout } from 'antd';
import Portfolio from './Components/Portfolio';

const TRACKING_ID = "G-YNBRX2WRRW"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {
    debug: true,
});

const App = () => {
    const [resumeData, setResumeData] = useState({});
    const getResumeData = () => {
        $.ajax({
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setResumeData(data);
            },
            error: (xhr, status, err) => {
                console.log(err);
                alert(err);
            },
        });
    };

    useEffect(() => {
        getResumeData();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <React.StrictMode>
            <Layout className="layout">
                {resumeData?.main && <Header data={resumeData.main} />}
                {resumeData?.main && <About data={resumeData.main} />}
                {resumeData?.resume && <Resume data={resumeData.resume} />}
                {resumeData?.portfolio && <Portfolio data={resumeData.portfolio} />}
                {resumeData?.main && <Contact data={resumeData.main} />}
                {resumeData?.main && <Footer data={resumeData.main} />}
                <BackTop>
                    <CaretUpFilled />
                </BackTop>
            </Layout>
        </React.StrictMode>
    );
};

export default App;
