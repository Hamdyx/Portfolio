import React from 'react';
import SocialLinks from './SocialLinks';
import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter = ({ data }) => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <SocialLinks socials={data.social} />
        </Footer>
    );
};

export default MainFooter;
