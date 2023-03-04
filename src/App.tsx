import React, { useEffect, useState } from 'react';
import { BackTop, Layout } from 'antd';
import { CaretUpFilled } from '@ant-design/icons';
import ReactGA from 'react-ga4';
import MainNavbar from './Components/MainNavbar';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';

const { Header: AntdHeader, Content } = Layout;

const TRACKING_ID = 'G-YNBRX2WRRW';
ReactGA.initialize(TRACKING_ID);

const App = () => {
    const [resumeData, setResumeData] = useState<any>({});
    const getResumeData = () => {
        fetch('./resumeData.json')
            .then((res) => res.json())
            .then((data) => setResumeData(data));
    };

    useEffect(() => {
        getResumeData();
        ReactGA.send('pageview');
    }, []);

    return (
        <React.StrictMode>
            <Layout>
                <AntdHeader className="header_main">
                    <MainNavbar />
                    {resumeData?.main && <Header data={resumeData.main} />}
                </AntdHeader>
                <Content>
                    {resumeData?.main && <About data={resumeData.main} />}
                    {resumeData?.resume && <Resume data={resumeData.resume} />}
                    {resumeData?.portfolio && <Portfolio data={resumeData.portfolio} />}
                    {/* {resumeData?.main && <Contact data={resumeData.main} />} */}
                </Content>
                {resumeData?.main && <Footer data={resumeData.main} />}
                <BackTop>
                    <a href="#home" aria-label="scroll-up">
                        <CaretUpFilled />
                    </a>
                </BackTop>
            </Layout>
        </React.StrictMode>
    );
};

export default App;
