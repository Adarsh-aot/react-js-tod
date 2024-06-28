import { useState, useEffect } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState(null);

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems);
      setItems(parsedItems);
      setFilteredItems(parsedItems);
    }
  }, []);

  const handleSaveContent = (content, date , id = null) => {
    let updatedItems;
    if (id !== null) {
      updatedItems = items.map(item =>
        item.id === id ? { ...item, content } : item
      );
    } else {
      const newItem = { id: items.length + 1, content, date ,  completed_task: false };
      updatedItems = [...items, newItem];
    }
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    window.location.reload();
  };

  const handleEditClick = (item) => {
    setItemToUpdate(item);
  };

  const deleteItem = (item) => {
    const updatedItems = items.filter(i => i.id !== item.id);
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const completeItem = (item) => {
    const updatedItems = items.map(it =>
      it.id === item.id ? { ...it, completed_task: true } : it
    );
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const activeItem = (item) => {
    const updatedItems = items.map(it =>
      it.id === item.id ? { ...it, completed_task: false } : it
    );
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const deleteCompletedTasks = () => {
    const updatedItems = items.filter(item => !item.completed_task);
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
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