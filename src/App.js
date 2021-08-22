import "./css/Style.css";
import React, { useState } from "react";
import Moon from "./img/icon-moon.svg";
import Sun from "./img/icon-sun.svg";
import Card from "./components/Card";
import TodoForm from "./components/TodoForm";

function App() {
  const [toggle, setToggle] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const Theme = () => {
    toggle === true ? setToggle(false) : setToggle(true);
    return toggle;
  };

  return (
    <div
      className={`container ${
        toggle ? "dark-container" : "light-container"
      } d-flex flex-column align-items-center`}
    >
      <div className="container-header mt-5 mb-4">
        <h1 className="text-title text-white ">Todo</h1>
        {toggle === true ? (
          <img
            onClick={Theme}
            className="cursor-pointer px-2 py-2"
            alt="sun"
            width="20"
            height="20"
            src={Sun}
          />
        ) : (
          <img
            onClick={Theme}
            className="cursor-pointer px-2 py-2"
            alt="moon"
            width="20"
            height="20"
            src={Moon}
          />
        )}
      </div>
      <div className={`card p-0 ${toggle ? "bg-dark" : "bg-white"} `}>
        <div className="card-body px-4 py-3 d-flex align-items-center ">
          <div
            className={`circle ${toggle ? "circle-dark" : "circle-light"}  `}
          />
          <TodoForm
            toggle={toggle}
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>

      <div
        className={`card my-4 p-0 ${
          toggle ? "bg-dark text-dark" : "bg-white text-light"
        }`}
      >
        {todos.map((todo) => (
          <Card
            border={toggle ? "dark" : "light"}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}

        <div className="card-footer d-flex justify-content-between px-4 my-2">
          <span className="fs-8 cursor-pointer">5 Itms left</span>
          <span>
            <span className="mx-2 fs-7 cursor-pointer">All</span>
            <span className="mx-2 fs-7 cursor-pointer">Active</span>
            <span className="mx-2 fs-7 cursor-pointer">Completed</span>
          </span>
          <span>
            <span className="mx-2 fs-7 cursor-pointer">Clear</span>
            <span className="mx-2 fs-7 cursor-pointer">Completed</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
