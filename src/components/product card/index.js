import { Button, Card, Row, Typography, Col } from "antd";
import "./index.scss"
const { Title } = Typography


export default function ProductCard() {
  return (
    <Row>
      <Card
      className="card"
        style={{ borderRadius: '5%', backgroundColor: '#BFBAAF' }}
        hoverable
        cover={
          <Row>
            <img
            className="cov-card"
              alt="img not found"
              src={'https://hyundai-official.com/wp-content/uploads/2022/01/slide4a.jpg'}
              style={{
                borderRadius: '5% 5% 0 0',
                width: "100%",
                height: "100%",
              }}
            />
            <Row className="ttl-cov-card"
            style={{ backgroundColor: '#003082', width: '40%',height:'30px' ,textAlign: 'center', position: 'absolute', top: 'calc(2%)', borderRadius: '0 15px 15px 0' }}>
              <Title level={4} style={{ color: 'whitesmoke' }}>
                STARGAZER
              </Title>
            </Row>
          </Row>
        }
      >
        <Row align="middle">
          <Col xs={{span:12}} span={8}>
            <Title 
            className="desc-ttl-card" level={5} style={{ fontWeight: '700',textAlign:'center' }}>
              MODEL STARGAZER
            </Title>
          </Col>
          <Col xs={{span:12}} span={16}>
            <Button 
            className="btn-to-detail" style={{ backgroundColor: '#003082', color: 'whitesmoke',marginLeft:'30px' }} onClick={(e) => {
              e.preventDefault()
            }}>
              KLIK DISINI
            </Button>
          </Col>
        </Row>
      </Card>
    </Row>
  )

}