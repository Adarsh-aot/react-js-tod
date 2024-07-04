import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  useEffect(() => {
    if (props.itemToUpdate) {
      setInputValue(props.itemToUpdate.content);
      setDateValue(props.itemToUpdate.date || ''); // Initialize date value if it exists
    } else {
      setInputValue('');
      setDateValue('');
    }
  }, [props.itemToUpdate]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleSaveClick = () => {
    if (props.onSave) {
      setInputValue('');
      
      props.onSave(inputValue, dateValue, props.itemToUpdate ? props.itemToUpdate.id : null);
    }
  };

  return (
    <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter something"
            />
            {/* <p>{itemToUpdate}</p> */}
            <input
              type="date"
              className="form-control mt-2"
              value={dateValue}
              onChange={handleDateChange}
              placeholder="Select a date"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSaveClick} data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;