import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function ItemBanner (props) {
  return (
    <div className='my-3'>
      <Row>
        <Col>
          <Link to='/lists'>
            <FontAwesomeIcon icon={faChevronLeft} /> Return To All Lists
          </Link>
        </Col>
        <Col xs={10}>
          <Row>
            <h1>{props.list.name}</h1>
          </Row>
          <Row>
            <h3>{props.list.description}</h3>
          </Row>
        </Col>
      </Row>
    </div>
  );
};