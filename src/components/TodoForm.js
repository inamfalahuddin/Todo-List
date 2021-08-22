import React from "react";

function TodoForm({ toggle, inputText, setInputText, todos, setTodos }) {
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      {
        id: Math.random() * 1000,
        title: inputText,
        completed: false,
      },
      ...todos,
    ]);

    setInputText("");
  };

  return (
    <form type="submit" onSubmit={submitHandler}>
      <input
        className={`form-input ${
          toggle ? "caret-dark text-dark" : "caret-light text-light"
        } fs-5 mx-4 w-85 `}
        type="text"
        placeholder="Type In Here"
        value={inputText}
        onChange={changeHandler}
      />
    </form>
  );
}

export default TodoForm;
