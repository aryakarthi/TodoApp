import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [data, setData] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: data,
    });
    setData("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Todo"
            value={data}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-btn edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add Todo"
            value={data}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-btn">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
