import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function ItemDisplay (props) {

  function parseImportance(importance) {
    if (importance === 1) {
      return <td>High</td>
    } else if (importance === 2) {
      return <td>Medium</td>
    } else if (importance === 3) {
      return <td>Low</td>
    }
  }

  if (props.listItems.length === 0) {
    return (
      <div>
        <h3>No Items Have Been Added To This List</h3>
        <Button variant='success' onClick={props.handleItemFormShow} >Add Items To List</Button>
      </div>
    )
  } else {
    return(
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Importance</th>
              <th>Description</th>
              <th> </th>
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
                {parseImportance(item.importance)}
                <td>{item.description}</td>
                <td>
                  <Button variant='warning' >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button variant='success' onClick={props.handleItemFormShow} >Add Items To List</Button>
      </div>
    )
  };
};

