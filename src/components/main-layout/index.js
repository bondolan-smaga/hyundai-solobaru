import { Layout } from "antd";
import { MainFooter, MainNavbar } from "../index"

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children, meta, ...props }) {
  return (
    <Layout>
      <Header style={{padding : '0px 0px',height:'fit-content'}}>
        <MainNavbar />
      </Header>
      <Content style={{padding : '0px 0px'}}>
        {children}
      </Content>
      <Footer style={{padding : '0px 0px'}}>
        <MainFooter />
      </Footer>
    </Layout>
  );
}