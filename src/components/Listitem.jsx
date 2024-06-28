import React from 'react';
import { FaCheckCircle, FaPen, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import './ListItem.css';

const ListItem = ({ item, onComplete, onEdit, onDelete, onactive }) => {
  return (
    <div className="card-horizontal" key={item.id}>
        {item.completed_task ? <img src='./src/assets/Group 1546.svg'
          className={` completed `}
          onClick={() => item.completed_task ? onactive(item) : onComplete(item)}
        /> : <input type="radio"
        className={`completed ${item.completed_task ? 'btn-warning' : 'btn-secondary'}`}
        onClick={() => item.completed_task ? onactive(item) : onComplete(item)}
      />}
      
          {/* {item.completed_task ? "Mark as Incomplete" : "Complete"} */}
          &nbsp
      <div className="content">
        <div className="label">
            <h5>{item.content}</h5>
            {item.completed_task ? <div className="in"></div>  : <div className="ln"></div>  }
            </div>
      

        <p>{item.date}</p>
        <div className="date">
          
          
        </div>
      </div>
      <div className="actions">
        
        <button
          className="btn btn-secondary ms-2"
          onClick={() => onEdit(item)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FaPen />
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => onDelete(item)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ListItem;