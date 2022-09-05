import { Link } from "react-router-dom"
import { Row, Col, Button, Dropdown, Menu, Typography, Image, Card } from 'antd'
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
    link: '/'
  }
]

const menuDrop = (
  <Menu
    style={{
      overflow: 'auto',
      listStyle: 'none',
      listStyleType: 'none',
      top: '80px'
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
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              MODEL
            </Link>
          </Title>
        )
      }
    ]}
  />
)
const dropItems = [
  {
    name: 'STARGAZER',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'IONIQ 5',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'HYUNDAI CRETA',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'KONA ELECTRIC',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'IONIQ',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'PALISADE',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'STARIA',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  },
  {
    name: 'SANTA FE',
    image: 'https://hyundai-official.com/wp-content/uploads/2022/07/IMG_20220715_180157-120x90.jpg'
  }
]

export default function MainNavbar() {
  // const modelDrop = (
  //   <Row>
  //     <Col span={24} style={{ display: 'flex', flexWrap: 'wrap' }}>
  //       {
  //         dropItems.map((dropItem) => {
  //           const { name, image } = dropItem
  //           return (
  //             <Col span={8}>
  //               <Card title={name} bordered={false}
  //                 cover={
  //                   <Image
  //                     src={image}
  //                     alt=''
  //                     preview={false}
  //                   />
  //                 }
  //               >
  //               </Card>
  //             </Col>
  //           )
  //         })
  //       }
  //     </Col>
  //   </Row>
  // )

  return (
    <Row style={{
      background: '#BFBAAF'
    }}>
      <Col>
        <Row>
          <Col xs={{ span: 24 }} span={24} className="logo">
            <Image className="mainlogo"
              preview={false}
              src="https://hyundai-official.com/wp-content/uploads/2022/01/logohyundai.png"
              alt="not found"
            />
          </Col>
          <Col className="address" span={24} >
            <Row>
              Hyundai-Solo Baru
            </Row>
            <Row>
              Jalan Ir. Soekarno, Grogol, Sukoharjo, Jawa Tengah
            </Row>
          </Col>
        </Row>
        <Row className="navbar-menu" justify="center" align="right">
          <Col span={24} className="main-menu" style={{ display: 'flex', marginLeft: '40px' }}>
            {
              menuProps.map((menuProp) => {
                const { text, link } = menuProp
                return (
                  <Col
                    style={{ overflow: 'auto', listStyle: 'none', textDecoration: 'none', fontWeight: '700', color: 'white', listStyleType: 'none' }}
                    md={{ span: 8 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    className="menu-item">
                    <Link to={link}>
                      {text}
                    </Link>
                  </Col>
                )
              })
            }
          </Col>
          <Col xs={{ span: 8 }} className="xs-menu">
            <Dropdown overlay={menuDrop} overlayStyle={{ height: 'fit-content', width: '100%', backgroundColor: 'rgba(74, 90, 124, 0.89)', fontFamily: 'inherit', borderRadius: '10px', color: 'white', lineHeight: '10px', top: '110px' }} placement={"bottom"}>
              <Button className="menubtn" onClick={(e) => {
                e.preventDefault()
              }}>MENU</Button>
            </Dropdown>
          </Col>
        </Row>
      </Col >
    </Row >
  )
};