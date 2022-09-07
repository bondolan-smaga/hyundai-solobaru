import { Button, Card, Col, Row, Typography } from "antd";
import "./index.scss"
const { Title } = Typography


export default function CsCard() {
  return (
    <Row>
      <Card
        className="card-cs"
        style={{ borderRadius: '5%', backgroundColor: '#BFBAAF'}}
        hoverable
        cover={
          <Row justify="center">
            <img
              className="cov-card"
              alt="img not found"
              src={'https://hyundai-official.com/wp-content/uploads/2022/04/profil.jpeg'}
              style={{
                borderRadius: '5% 5% 0 0',
                width: "100%",
                height: "100%",
              }}
            />
            <Button className="btn-cs">
              HUBUNGI KAMI
            </Button>
          </Row>
        }
      >
        <Row>
          <Col span={24}>
            <Row justify="center"  className="desc-cs">
              <Title level={5} style={{ textAlign: 'center'}}>
                NAMA SIAPA INI
              </Title>
            </Row>
            <Row justify="center" style={{ textAlign: 'center'}}>
              MARKETING OFFICER
            </Row>
          </Col>
        </Row>
      </Card>
    </Row>
  )
}