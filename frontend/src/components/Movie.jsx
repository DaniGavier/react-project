import React from "react";
import { Card, Col, Row,Button } from "react-bootstrap/";
import { Link } from "react-router-dom";

const Movie = ({ d }) => {
  return (
    <Col className="g-4 cardsprincipales">
      <Card className="p-0 h-100 border-0">
        <Card.Img className="top image-movie" src={d.image} />
        <Card.Body>
          <Card.Title className="movie-title">{d.title}</Card.Title>
        </Card.Body>
        <Card.Footer className="p-1 bg-light">
          <Row>
            <Col className="col-4">
              <i className="fa-solid fa-star"></i>
              <span className="p-1">1</span>
            </Col>
            <Col className="col-8">
              <Link to="/">
                <div>
                    <Link 
                    className=" btn-cards "
                    to={`/movie/${d.id}`}
                  ><Button className="btn-cards">
                    Ver más
                    </Button>
                  </Link>
                  
                </div>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Movie;
