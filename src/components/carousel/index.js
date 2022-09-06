import { Carousel, Col, Image, Row } from 'antd'

const contentStyle = {
  color: '#fff',
  textAlign: 'center',
}


let carImages = ["https://hyundai-official.com/wp-content/uploads/2022/01/slide4a.jpg", "https://hyundai-official.com/wp-content/uploads/2022/01/slide3a.jpg", "https://hyundai-official.com/wp-content/uploads/2022/01/slide1a-1.jpg", "https://hyundai-official.com/wp-content/uploads/2022/01/slide2a.jpg"]

export default function CarouselBanner() {
  return (
    <Row >
      <Col>
        <Carousel autoplay>
          {
            carImages.map((carImage) => {
              return (
                <div>
                  <h3 style={contentStyle}>
                    <Image
                      src={carImage}
                    />
                  </h3>
                </div>
              )
            })
          }
        </Carousel>
      </Col>
    </Row >
  )
}
