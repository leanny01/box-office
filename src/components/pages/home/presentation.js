import React from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from "react-bootstrap";
import './style.css'

const MovieCard = ({ movie,showPopUp}) => {

  const base_url = "http://image.tmdb.org/t/p/w500/";


  return (

      <Card style={{ width: "18rem" }} className="card" onClick={()=>showPopUp(movie)} >
        <Card.Img variant="top" src={base_url + movie.backdrop_path} />
       
      </Card>

  );
};
const Presentation = ({ movies,showPopUp }) => {

  
  
  return (
    <Container fluid>
      <Row className="row">
        <Col>
          <h1>Upcoming movies</h1>
        </Col>
      </Row>
      <Row className="row">
        
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} showPopUp={showPopUp}  />;
        })}
      </Row>
    </Container>
  );
};

export default Presentation;
