import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ItemBanner from './ItemBanner.jsx';
import ItemDisplay from './ItemDisplay.jsx';

export default function ItemContainer () {
  //The following are simply the state declations for this component
  const [list, setList] = useState({});
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState('');
  
  //The following grants access to params passed by the navigation link that directs here
  const {state} = useLocation();
  const {listId} = state;

  useEffect(() => {
    fetchItemData();
  }, []);

  function fetchItemData () {
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


  return(
    <div>
      <ItemBanner list={list} />
      <ItemDisplay listItems={listItems} handleToggleComplete={handleToggleComplete} />
    </div>
  );
};