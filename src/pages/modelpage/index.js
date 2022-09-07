import { Row, Col } from 'antd';
import MainLayout from '../../components/main-layout';
import { ProductCard } from '../../components';

// let modelImages = ["https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-280x190.jpg", "https://hyundai-official.com/wp-content/uploads/2022/04/ioniq5a-280x190.jpg"]

export default function ModelPage() {
  return (
    <MainLayout>
      <Row gutter={8}>
        {/* {modelImages.map((modelImage) => { */}
        {/* return ( */}
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}>
          <ProductCard />
        </Col>
        {/* ) */}
        {/* })} */}
      </Row>
    </MainLayout>
  );
}