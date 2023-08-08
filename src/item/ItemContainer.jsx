import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ItemBanner from './ItemBanner.jsx';
import ItemDisplay from './ItemDisplay.jsx';
import ItemForm from './ItemForm.jsx';
import {railsUpdatePath} from '../utils.js'

export default function ItemContainer () {
  //The following are simply the state declations for this component
  const [list, setList] = useState({});
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState('');
  const [showItemForm, setShowItemForm] = useState(false);
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState('');
  
  //The following grants access to params passed by the navigation link that directs here
  const {state} = useLocation();
  const {listId} = state;

  useEffect(() => {
    fetchAllItemsData();
  }, []);

  function fetchAllItemsData () {
    fetch(`/items?list_id=${encodeURIComponent(listId)}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setList(data);
        setListItems(data.items);
      });
  };

  function handleToggleComplete (id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`/items/${id}/toggle_complete`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setList(data);
        setListItems(data.items);
      })
  }

  function handleFormSubmit () {
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({list_id: listId, item: {description: description, importance: importance}})
    };
    fetch(`/items`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setListItems(data.items);
        handleItemFormShow();
      })
  }

  function handleFormChange ({target}) {
    const entry = target.value

    if (target.id === 'description') {
      setDescription(entry)
    } else if (target.id === 'importance') {
      setImportance(entry)
    }
  }

  function handleItemFormShow () {
    if (showItemForm === true) {
      setDescription('');
      setImportance('');
    }

    setShowItemForm((prev) => !prev);
  };


  return(
    <div>
      <ItemBanner list={list} />
      <ItemDisplay 
        listItems={listItems} 
        handleToggleComplete={handleToggleComplete} 
        handleItemFormShow={handleItemFormShow}
      />
      <ItemForm 
        description={description} 
        importance={importance} 
        showItemForm={showItemForm}
        handleFormSubmit={handleFormSubmit} 
        handleItemFormShow={handleItemFormShow}
        handleFormChange={handleFormChange} 
      />
    </div>
  );
};