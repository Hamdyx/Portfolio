import { StrictMode, useEffect, useState } from 'react';
import { BackTop, Layout } from 'antd';
import { CaretUpFilled } from '@ant-design/icons';
import ReactGA from 'react-ga4';
import MainNavbar from './Components/MainNavbar';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
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
    console.log({ resumeData });

    return (
        <StrictMode>
            <Layout>
                <AntdHeader className="header_main">
                    <MainNavbar />
                    {resumeData?.main && (
                        <Header
                            info={{
                                name: resumeData.main.name,
                                title: resumeData.main.title,
                                socials: resumeData.social,
                            }}
                        />
                    )}
                </AntdHeader>
                <Content>
                    {resumeData?.main && <About data={resumeData.main} />}
                    {resumeData?.resume && <Resume data={resumeData.resume} />}
                    {resumeData?.portfolio && (
                        <Portfolio projects={resumeData.portfolio.projects} />
                    )}
                </Content>
                {resumeData?.social && <Footer socialLinks={resumeData.social} />}
                <BackTop>
                    <a href="#home" aria-label="scroll-up">
                        <CaretUpFilled />
                    </a>
                </BackTop>
            </Layout>
        </StrictMode>
    );
};

export default App;
