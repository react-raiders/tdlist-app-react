import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default function ItemForm (props) {
  return (
    <>
      <Modal show={props.showItemForm} >
        <Modal.Header>
          <Modal.Title>Item Add Form</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group className='my-3'>
              <Form.Label>Enter Task Description</Form.Label>
              <Form.Control 
                id='description' 
                type='text' 
                value={props.description} 
                onChange={props.handleFormChange} 
              />
            </Form.Group>

            <Form.Group className='my-3'>
              <Form.Label>Select Importance Level</Form.Label>
              <Form.Select 
                placeholder='Importance' 
                id='importance' 
                value={props.importance} 
                onChange={props.handleFormChange} 
              >
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={props.handleItemFormShow}>Close</Button>
            <Button variant='success' onClick={props.handleFormSubmit}>Submit</Button>
          </Modal.Footer>
          </Form>
      </Modal>
    </>
  );
};