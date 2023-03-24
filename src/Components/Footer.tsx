import SocialLinks from './SocialLinks';
import { Layout } from 'antd';
import { Social } from '../types';
const { Footer } = Layout;

const MainFooter = ({ socialLinks }: { socialLinks: Social[] }) => {
    return (
        <Footer>
            <SocialLinks socials={socialLinks} />
        </Footer>
    );
};

export default MainFooter;
