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
      {item.completed_task ? 
        <img src='./src/assets/Group 1546.svg'
          className={`completed`}
          onClick={() => item.completed_task ? onactive(item) : onComplete(item)}
        /> : 
        <input type="radio"
          className={`completed ${item.completed_task ? 'btn-warning' : 'btn-secondary'}`}
          onClick={() => item.completed_task ? onactive(item) : onComplete(item)}
        />
      }
      
      &nbsp;
      
      <div className="content">
        <div className="label">
          <h5>{item.content}</h5>
          {item.completed_task ? <div className="in"></div> : <div className="ln"></div>}
        </div>

        {item.completed_task ? 
          <p><img src="./src/assets/calendar_month_black_24dp 2 (1).svg" alt="" /> {item.date}</p> :
          <p>{isDateBeforeToday ? <div className="delay-date"><img  className="delay-img" src="./src/assets/calendar_month_black_24dp 2 (2).svg" alt="" /><p style={{color: 'red'}}> {item.date}</p> </div>: <p><img src="./src/assets/calendar_month_black_24dp 2 (1).svg" alt="" /> {item.date}</p>}</p>
        }

        <div className="date"></div>
      </div>
      
      <div className="actions">
        <button
          className="btn btn-secondary ms-2"
          onClick={() => onEdit(item)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="./src/assets/Group 817 (1).svg" alt="" />
        </button>
        <button
          className="btn btn-danger ms-2"
          data-bs-toggle="modal" 
          data-bs-target="#DeleteModal"
        >
           <img src="./src/assets/Group (1).svg" alt="" />
        </button>
      </div>

      <div className="modal fade" id="DeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center text-black" id="exampleModalLabel">Delete Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-black">
              Are you sure you want to delete this task? 
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => onDelete(item)}>Delete</button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default ListItem;