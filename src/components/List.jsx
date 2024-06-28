import React from 'react';
import ListItem from './Listitem';
import './ListItem.css';
const List = ({ items, onComplete, onEdit, onDelete, onactive , onCompleted , name }) => {
  return (
    <ul style={{ paddingleft: 0 }}>
        <h1>{name}</h1>
      {items.map((item) => 
        (item.completed_task === onCompleted) && (
            <>
            
          <ListItem 
            key={item.id}
            item={item}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
            onactive={onactive}
          />
          </>
        
        )
      )}
    </ul>
  );
};

export default List;