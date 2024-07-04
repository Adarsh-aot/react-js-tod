import React, { useState } from 'react';
import Modal from './components/Modal';
import Search from './components/Search';
import Button from './components/Button';
import List from './components/List';
import useItems from './hooks/useItems';
import Sort from './components/Sort'; // Import the Sort component

const App = () => {
  const {
    filteredItems,
    itemToUpdate,
    handleSaveContent,
    activeItem,
    handleEditClick,
    deleteItem,
    completeItem,
    deleteCompletedTasks,
    handleSearch,
    setItemToUpdate,
  } = useItems();

  const [sortBy, setSortBy] = useState('date'); // State for sorting by date
  const [sortOrder, setSortOrder] = useState('asc'); // State for sort order

  const handleSortChange = (sortBy) => {
    if (sortBy === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortBy);
      setSortOrder('asc'); // Reset sort order when changing criteria
    }
  };

  // Sorting logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    const orderFactor = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'date') {
      return orderFactor * (new Date(a.date) - new Date(b.date));
    }
    // Add more sorting criteria if needed
    return 0; // Default to no sorting
  });

  return (
    <div className="App">
      <div className="nav">
        <h1>My Task</h1>
        <Button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setItemToUpdate(null)}
        >
          Open Modal
        </Button>
      </div>
      <div className="nav">
        <Search onSearch={handleSearch} />
        <Sort onChange={handleSortChange} sortOrder={sortOrder} sortBy={sortBy} />
      </div>

      
      <h1>Active Components</h1>
      <List
        items={sortedItems}
        onComplete={completeItem}
        onEdit={handleEditClick}
        onDelete={deleteItem}
        onactive={activeItem}
        onCompleted={false}
        name=""
      />
      <div className="nav">
      <h1>Inactive Components</h1>
        <Button
          className="btn btn-primary"
          onClick={deleteCompletedTasks}
        >
          Clear Completed Tasks
        </Button>
      </div>
      <List
        items={sortedItems}
        onComplete={completeItem}
        onEdit={handleEditClick}
        onDelete={deleteItem}
        onactive={activeItem}
        onCompleted={true}
        name=""
      />

      <Modal id="exampleModal" name="Example Modal" onSave={handleSaveContent} itemToUpdate={itemToUpdate} />
    </div>
  );
}

export default App;
