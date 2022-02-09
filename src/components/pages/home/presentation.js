import React from "react";
import { Row, Col } from "react-bootstrap";

import MovieCard from '../../parts/moviecard/moviecard';
import Container from "react-bootstrap/Container";

import "./style.css";


const Presentation = ({ movies, showPopUp }) => {
  return (
    <Container fluid>
      <Row className="row">
        <Col>
          <h1>Upcoming movies</h1>
        </Col>
      </Row>
      <Row className="row">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} showPopUp={showPopUp} />;
        })}
      </Row>
    </Container>
  );
};

export default Presentation;
