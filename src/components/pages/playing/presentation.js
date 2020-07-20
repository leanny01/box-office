import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col, Button, Card } from "react-bootstrap";
import './style.css'

const MovieCard = ({ movie }) => {
  const base_url = "http://image.tmdb.org/t/p/w500/";
  return (

      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={base_url + movie.backdrop_path} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>

  );
};
const Presentation = ({ movies }) => {
  return (
    <Container fluid>
      <Row className="row">
        <Col>
          <h1>Currently Playing</h1>
        </Col>
      </Row>
      <Row className="row">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default Presentation;
