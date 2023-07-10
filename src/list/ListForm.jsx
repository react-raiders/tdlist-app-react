import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

export default function ListForm (props) {

	return(
		<>
			<Modal show={props.showForm}>
				<Modal.Header>
					<Modal.Title>{(Object.values(props.list).length > 0) ? `Edit ${props.name}` : 'Add New List'}</Modal.Title>
				</Modal.Header>

				<Form onSubmit={props.handleFormSubmit} className={(Object.values(props.list).length > 0) ? 'list_update_form' : 'list_create_form'}>
					<Modal.Body>
						<Form.Group className='mb-3'>
							<Form.Label>Enter To-Do List Name</Form.Label>
							<Form.Control id='name' type='text' size='lg' placeholder='Enter Name' value={props.name} onChange={props.handleFormChange} />
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Enter To-Do List Description</Form.Label>
							<Form.Control id='description' as='textarea' rows={3} placeholder='Enter Description' value={props.description} onChange={props.handleFormChange} />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Row>
							<Col>
								<Button variant='primary' type='submit'>{(Object.values(props.list).length > 0) ? 'Update' : 'Submit'}</Button>
							</Col>
							<Col>
								<Button variant='secondary' onClick={props.handleFormShow}>Cancel</Button>
							</Col>
						</Row>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};