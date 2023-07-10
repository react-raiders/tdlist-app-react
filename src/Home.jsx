import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home () {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path)
  }

  return(
    <Container>
      <Row>
        <Col>
          <h1>To-Do List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>A simple to-do list app</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='success' onClick={() => handleClick('lists')} >Get Started!</Button>
        </Col>
      </Row>
    </Container>
  );
};