import { Card, Row, Typography} from "antd";
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
              style={{ backgroundColor: '#003082', width: 'fit-content', height: '20px', textAlign: 'center', position: 'absolute', top: 'calc(2%)', borderRadius: '7px 15px 15px 0' }}>
              <Title level={5} style={{ color: 'whitesmoke',fontSize:'0.7rem'}}>
                STARGAZER
              </Title>
            </Row>
          </Row>
        }
      >
      </Card>
    </Row>
  )

}