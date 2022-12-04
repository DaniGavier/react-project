import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Premier1 from "../img/Categories/premiere1.jpg";
import Premier2 from "../img/Categories/premiere2.png";
import Premier3 from "../img/Categories/premiere3.png";
import Premier4 from "../img/Categories/premiere4.jpg";
import Premier5 from "../img/Categories/premiere5.jpg";

const NextPremieres = () => {
  return (
    <Container className="mb-5">
      <h2 className="mt-4">PRÓXIMOS ESTRENOS</h2>
      <hr></hr>
      <Row xs={2} md={3} xl={5} className="g-5">
        <Col>
          <Card>
            <Card.Img variant="top" src={Premier1} />
            <Card.Body>
              <Card.Title className="movie-title">
                El cuarto pasajero
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Premier2} />
            <Card.Body>
              <Card.Title className="movie-title">
                No mires a los ojos
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Premier3} />
            <Card.Body>
              <Card.Title className="movie-title">Exorcismos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Premier4} />
            <Card.Body>
              <Card.Title className="movie-title">Sintiéndolo mucho</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Premier5} />
            <Card.Body>
              <Card.Title className="movie-title">Black Adam</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NextPremieres;
