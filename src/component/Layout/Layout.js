import { Layout, Space } from 'antd';
import HeaderMenu from './Header';
import ContentPage from './Content';
const { Header, Footer, Content } = Layout;

const PageLayout = () => {
    const headerStyle = {
        // display: 'flex',
        // alignItems: 'center',
        backgroundColor: '#fff',
      };
      const contentStyle = {
        // padding: '0 50px'
      };
return (
    <Layout className="layout">
    <div style={{padding:'10px'}}>
        <Header style={headerStyle } ><HeaderMenu /></Header>
    </div>
      <Content style={contentStyle}><ContentPage /></Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
)
}

export default PageLayout;