import { Helmet } from "react-helmet-async";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children, meta, ...props }) {
  const { title } = meta || {};

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
      </Helmet>
      <Header></Header>
      <Content>
        {children}
      </Content>
      <Footer></Footer>
    </Layout>
  );
}