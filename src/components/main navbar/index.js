import { Link } from "react-router-dom"
import { Row, Col, Button, Dropdown, Menu, Typography, Image } from 'antd'
import "./index.scss"

const { Title } = Typography
const menuProps = [
  {
    text: 'HOME',
    link: '/'
  },
  {
    text: 'PRICELIST',
    link: '/pricelist'
  },
  {
    text: 'MODEL',
    link: '/model'
  }
]


const menuDrop = (
  <Menu
    style={{
      overflow: 'hidden',
      listStyle: 'none',
      listStyleType: 'none',
      backgroundColor: '#003082'
    }}
    items={[
      {
        key: '1',
        label: (
          <Title level={5}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              HOME
            </Link>
          </Title>
        )
      },
      {
        key: '2',
        label: (
          <Title level={5}>
            <Link to="/pricelist" style={{ color: 'white', textDecoration: 'none' }}>
              PRICELIST
            </Link>
          </Title>
        )
      },
      {
        key: '3',
        label: (
          <Title level={5}>
            <Link to="/model" style={{ color: 'white', textDecoration: 'none' }}>
              MODEL
            </Link>
          </Title>
        )
      }
    ]}
  />
)

export default function MainNavbar() {

  return (
    <Row style={{
      background: '#BFBAAF'
    }}>
      <Col span={24}>
        <Row>
          <Col xs={{ span: 24 }} span={24} className="logo">
            <Image className="mainlogo"
              preview={false}
              src="https://hyundai-official.com/wp-content/uploads/2022/01/logohyundai.png"
              alt="not found"
              sizes="default"
            />
          </Col>
          <Row>
            <Col span={24} className="address">
              <Row style={{ textAlign: 'right' }}>
                Hyundai-Solo Baru
              </Row>
              <Row style={{ textAlign: 'right' }}>
                Jalan Ir. Soekarno, Grogol, Sukoharjo, Jawa Tengah
              </Row>
            </Col>
          </Row>
        </Row>
      </Col >
      <Row className="navbar-menu">
        <Col span={24} className="main-menu" style={{ display: 'flex' }}>
          {
            menuProps.map((menuProp) => {
              const { text, link } = menuProp
              return (
                <Col
                  style={{ overflow: 'hidden', listStyle: 'none', textDecoration: 'none', fontWeight: '700', color: 'white', listStyleType: 'none' }}
                  md={{ span: 3 }}
                  lg={{ span: 3 }}
                  xl={{ span: 2 }}
                  xxl={{ span: 3 }}
                  className="menu-item">
                  <Link to={link} style={{ textDecoration: 'none', listStyle: 'none', color: 'black' }}>
                    {text}
                  </Link>
                </Col>
              )
            })
          }
        </Col>
        <Dropdown overlay={menuDrop} overlayStyle={{ width: '100%', backgroundColor: 'rgb(123, 134, 228)', fontFamily: 'inherit', borderRadius: '10px', color: 'white' }} placement={"bottom"}>
          <Button className="menubtn" onClick={(e) => {
            e.preventDefault()
          }}>MENU</Button>
        </Dropdown>
      </Row>
    </Row >
  )
};
