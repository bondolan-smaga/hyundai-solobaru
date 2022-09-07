import { Col, Row } from "antd";
import { MainLayout, CarouselBanner, ProductCard } from "../../components";


export default function HomePage() {
  return (
    <MainLayout>
      <Row gutter={8}>
        <Col span={12}>
          <ProductCard />
        </Col>
        <Col span={12}>
          <ProductCard />
        </Col>
      </Row>
      <Row gutter={4}>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
      </Row>
      <Row gutter={8}>
      <Col span={6}>
          <ProductCard />
        </Col>
        <Col span={6}>
          <ProductCard />
        </Col>
        <Col span={6}>
          <ProductCard />
        </Col>
        <Col span={6}>
          <ProductCard/>
        </Col>
      </Row>

      {/* <Col span={6}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col> */}
      {/* <CarouselBanner /> */}
    </MainLayout>
  );
}