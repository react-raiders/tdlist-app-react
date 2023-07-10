import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function ListDisplay (props) {
  const navigate = useNavigate();
  
  if (props.allLists.length === 0) {
    return <p>No Lists have been created yet!</p>
  } else {
    return(
      <div>
        <h1>All Current Lists</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { props.allLists.map((item) => 
              <tr id={'list_' + item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant='primary' className='mx-2' onClick={() => navigate('/items', {state: {listId: item.id}} )}>
                    <FontAwesomeIcon icon={faListCheck} />
                  </Button>
                  <Button variant='warning' className='mx-2' onClick={() => props.handleFormShow(item.id)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <Button variant='danger' className='mx-2'onClick={() => props.handleDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </Button> 
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  };
};