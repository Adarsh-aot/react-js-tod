import { useState, useEffect } from 'react';
import axios from 'axios';

const useItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  // const base = 'http://localhost:3000/todo';
  const base = 'https://node-todo-2-0jl6.onrender.com/todo';

  useEffect(() => {
    axios.get(base).then((response) => {
      const savedItems = response.data;
      setItems(savedItems);
      setFilteredItems(savedItems);
    });
  }, []);

  const createItem = (content, date) => {
    const newItem = { content, date, completed_task: false };
    axios.post(base, newItem)
      .then((response) => {
        const savedItem = response.data;
        const updatedItems = [...items, savedItem];
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        window.location.reload();
      })
      .catch(error => {
        console.error("There was an error creating the item!", error);
      });
  };

  const updateItem = (id, content, date) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, content, date } : item
    );
    axios.put(`${base}/${id}`, { id, content, date, completed_task: false })
      .then(() => {
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        window.location.reload();
      })
      .catch(error => {
        console.error("There was an error updating the item!", error);
      });
  };

  const handleSaveContent = (content, date, id = null) => {
    if (id !== null) {
      updateItem(id, content, date);
    } else {
      createItem(content, date);
    }
  };

  const handleEditClick = (item) => {
    setItemToUpdate(item);
  };

  const deleteItem = (item) => {
    axios.delete(`${base}/${item.id}`)
      .then(() => {
        const updatedItems = items.filter(i => i.id !== item.id);
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        window.location.reload();
      })
      .catch(error => {
        console.error("There was an error deleting the item!", error);
      });
  };

  const completeItem = (item) => {
    axios.get(`${base}/completed/${item.id}`).then((response) => {
      const savedItems = response.data;
    setItems(savedItems);
    setFilteredItems(savedItems);
    localStorage.setItem('items', JSON.stringify(savedItems))
    })
  };

  const activeItem = (item) => {
    axios.get(`${base}/completed/${item.id}`).then((response) => {
      const savedItems = response.data;
    setItems(savedItems);
    setFilteredItems(savedItems);
    localStorage.setItem('items', JSON.stringify(savedItems))
    })
  };

  const deleteCompletedTasks = () => {
    axios.get(`${base}/clear`)
      .then(() => {
        const updatedItems = responce.data
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        window.location.reload();
      })
      .catch(error => {
        console.error("There was an error deleting the item!", error);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = items.filter(item =>
      item.content.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredItems(filtered);
  };

  return {
    items,
    filteredItems,
    itemToUpdate,
    handleSaveContent,
    handleEditClick,
    activeItem,
    deleteItem,
    completeItem,
    deleteCompletedTasks,
    handleSearch,
    setItemToUpdate
  };
};

export default useItems;