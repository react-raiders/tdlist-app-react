import React, { useState, useEffect } from 'react';
import ListForm from './ListForm.jsx';
import ListDisplay from './ListDisplay.jsx';
import Button from 'react-bootstrap/Button';

export default function ListContainer () {
	const [allLists, setAllLists] = useState([]);
  const [list, setList] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const fetchAllListData = () => {
    fetch('/lists')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllLists(data)
      });
  };

  const fetchListData = (id) => {
    fetch(`/lists/${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        console.log(`The data length is: ${data.length}`)
        setList(data);
        setName(data.name);
        setDescription(data.description);
      });
  };

  useEffect(() => {
    fetchAllListData();
  }, []);

  function handleFormShow (id) {
    if (typeof id === 'number' && showForm === false) {
      fetchListData(id);
    }

    if (showForm === true) {
      setName('');
      setDescription('');
      setList({});
    }

    setShowForm((prev) => !prev);
  };

  const addToLists = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description })
    };
    fetch('/lists', requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllLists(data);
      })
  }

  const updateList = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description })
    };
    fetch(`/lists/${list.id}`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllLists(data)
      })
  }

  function handleDelete (id) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description })
    };
    fetch(`/lists/${id}`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllLists(data)
      })
  }

  function handleFormSubmit (event) {
    event.preventDefault();

    if (event.target.className === 'list_create_form') {
      addToLists();
    } else if (event.target.className === 'list_update_form') {
      updateList();
    }
    
    handleFormShow();
  };

  function handleFormChange (event) {
    const entry = event.target.value

    if (event.target.id === 'name') {
      setName(entry);
    } else if (event.target.id === 'description') {
      setDescription(entry);
    };
  };

	return(
    <div>
      <ListDisplay allLists={allLists} handleFormShow={handleFormShow} handleDelete={handleDelete} />
      <ListForm
        list={list} 
        name={name} 
        description={description} 
        showForm={showForm} 
        handleFormShow={handleFormShow} 
        handleFormChange={handleFormChange} 
        handleFormSubmit={handleFormSubmit} 
      />
      <Button variant='success' onClick={handleFormShow}>Add New List</Button>
    </div>
  );
};