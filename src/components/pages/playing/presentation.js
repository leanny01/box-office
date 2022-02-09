import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col} from "react-bootstrap";

import MovieCard from '../../parts/moviecard/moviecard';

import './style.css'


const Presentation = ({ movies,showHidePopUp }) => {
  return (
    <Container fluid>
      <Row className="row">
        <Col>
          <h1>Currently Playing</h1>
        </Col>
      </Row>
      <Row className="row">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index}  showHidePopUp={showHidePopUp}/>;
        })}
      </Row>
    </Container>
  );
};

export default Presentation;
