// import { Link } from "react-router-dom"
import { Row, Col, Button, Dropdown} from 'antd'
import "./index.scss"

const menuDrop =([])
export default function MainNavbar() {
  return (
    <Row style={{
      background: ''
    }}>
      <Col>
        <Row>
          <Col xs={{ span: 24 }} span={24} className="logo">
            <img className="mainlogo"
              src="https://hyundai-official.com/wp-content/uploads/2022/01/logohyundai.png"
              alt="not found"
            />
          </Col>
          <Col className="address">
            <span>
              Hyundai-Solo Baru
            </span>
            <span>
              Jalan Ir. Soekarno, Grogol, Sukoharjo, Jawa Tengah
            </span>
          </Col>
        </Row>
        <Row className="navbar-menu">
          <Dropdown overlay={menuDrop} overlayStyle={{ height: '70px', backgroundColor: 'rgba(74, 90, 124, 0.89)', width: 'fit-content', fontFamily: 'inherit', transform: 'translateX(-5px)', borderRadius: '10px', color: 'white' }} placement={"bottomRight"}>
            <Button className="menubtn" >MENU</Button>
          </Dropdown>
        </Row>
      </Col>
    </Row>
  )
};