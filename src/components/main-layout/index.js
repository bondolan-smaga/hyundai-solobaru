import { Layout } from "antd";
import { MainFooter, MainNavbar } from "../index"

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children, meta, ...props }) {
  return (
    <Layout>
      <Header style={{padding : '0px 15px 0px 15px'}}>
        <MainNavbar />
      </Header>
      <Content style={{padding : '0px 15px 0px 15px'}}>
        {children}
      </Content>
      <Footer style={{padding : '0px 15px 0px 15px'}}>
        <MainFooter />
      </Footer>
    </Layout>
  );
}