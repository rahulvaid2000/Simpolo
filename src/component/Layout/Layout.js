import {Layout, Space} from "antd";
// import HeaderMenu from "./Header";
import ContentPage from "./Content";
import FooterPage from "./Footer";
import HeaderMenu from "./Header";
// import HeaderPageLayout from "../../Header";

const {Header, Footer, Content} = Layout;

const PageLayout = () => {
    return (
        <Layout className="layout">
            <div style={{padding: "10px"}}>
                <Header style={{background:"#ffff !important" , paddingInline:"0px"}}>
                    <HeaderMenu />
                </Header>
            </div>
            <Content style={{background:"#ffff !important"}}>
                <ContentPage />
            </Content>
            <Footer style={{background:"#f5f5f5 !important"}}>
                <FooterPage  />
            </Footer>
        </Layout>
    );
};

export default PageLayout;
