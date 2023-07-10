import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircle } from '@fortawesome/free-regular-svg-icons'

export default function ItemDisplay (props) {
  
  if (props.listItems.length === 0) {
    return <h3>No Items Have Been Added To This List</h3>
  } else {
    return(
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>  
          {props.listItems.map(item => 
            <tr id={`item_${item.id}`}>
              <td>
                <Button variant={item.completed ? 'success' : 'secondary'} onClick={() => props.handleToggleComplete(item.id)} >
                  <FontAwesomeIcon icon={item.completed ? faCircleCheck : faCircle} /> 
                  {item.completed ? ' Complete' : ' Incomplete'}
                </Button>
              </td>
              <td>{item.description}</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  };
};

