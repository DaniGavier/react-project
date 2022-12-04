import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Slider1 from "../img/Categories/slider1.jpg";
import Slider2 from "../img/Categories/slider2.jpg";
import Slider3 from "../img/Categories/slider3.jpg";

//import Dropdown from 'react-bootstrap/Dropdown';
// import Ratio from "react-bootstrap/Ratio";

const Category = () => {
  return (
    <Container className="mb-5">
      <h2 className="mt-2">CATEGORIÍAS</h2>
      <hr></hr>
      <Row className="mb-5"></Row>
      <Row xs={1} md={2} className="g-5">
        <Col>
          <Row>
            <Col className="mb-4 d-flex justify-content-center">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Slider1} />
                <Card.Body>
                  <Card.Title>Comedia</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4 d-flex justify-content-center">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Slider2} />
                <Card.Body>
                  <Card.Title>Acción</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4 d-flex justify-content-center">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Slider3} />
                <Card.Body>
                  <Card.Title>Drama</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4 d-flex justify-content-center">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={Slider1} />
                <Card.Body>
                  <Card.Title>Ciencia Ficción</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <Col>
          <Card>
            <div
              style={{ width: "auto", height: "auto" }}
              className="d-none d-md-block"
            >
              <Ratio aspectRatio="16x9">
                <embed
                  type="image/svg+xml"
                  src="https://www.youtube.com/embed/D30r0CwtIKc"
                />
              </Ratio>
            </div>
            <Card.Body className="d-none d-md-block p-2">
              <Card.Img variant="top" src={Slider2} />
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Category;
