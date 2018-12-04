import React from "react";

const Form = props => {
  const { onSubmit } = props;

  return (
    <div className="col-4 p-4">
      <form onSubmit={e => onSubmit(e)}>
        <label style={{ color: "#fff" }} htmlFor="todo">
          Add an Activity
        </label>
        <input
          id="todo"
          type="text"
          className="form-control"
          placeholder="To Do"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Form;
