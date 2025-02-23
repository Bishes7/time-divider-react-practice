import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [task, setTask] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    addUser(task);
  };

  return (
    <div>
      <form
        onSubmit={handelOnSubmit}
        action="javascript:void(0)"
        className="border p-5 rounded-5 shadow-lg mt-5"
      >
        <div className="row g-2">
          <div className="col-md-6">
            <input
              onChange={handleOnChange}
              type="text"
              className="form-control"
              placeholder="Add Task "
              aria-label="First name"
              name="task"
              id="task"
            />
          </div>
          <div className="col-md-2">
            <input
              onChange={handleOnChange}
              type="number"
              className="form-control"
              placeholder="hours"
              aria-label="Last name"
              name="hours"
              min="1"
            />
          </div>
          <div className="col-md-4 d-grid">
            <button className="btn btn-success">Add New Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
