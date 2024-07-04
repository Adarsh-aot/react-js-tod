import React from 'react';
import { FaCheckCircle, FaPen, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import './ListItem.css';

const ListItem = ({ item, onComplete, onEdit, onDelete, onactive }) => {
  const today = new Date();
  const itemDate = new Date(item.date);
  const isDateBeforeToday = itemDate < today;
  const isDateAfterToday = itemDate > today;
  
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
      
          
        { item.completed_task ? 
        <p><img src="./src/assets/calendar_month_black_24dp 2 (1).svg" alt="" /> {item.date}</p> :
        <p>{isDateBeforeToday ? <p style={{color: 'red'}}><img src="./src/assets/calendar_month_black_24dp 2 (2).svg" alt="" /> { item.date }</p> : <p><img src="./src/assets/calendar_month_black_24dp 2 (1).svg" alt="" /> { item.date }</p> }</p> 
        
}

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