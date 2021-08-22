import React, { useState } from "react";
import CrossIcon from "../img/icon-cross.svg";

function Card({ border, todos, id, title, completed, setTodos }) {
  const [btnClose, setBtnClose] = useState(false);

  const CardCompleted = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !completed,
          };
        }
        return item;
      })
    );
  };

  const HoverHandler = (e) => {
    setBtnClose(!btnClose);
  };

  const HoverLeftHandler = (e) => {
    setBtnClose(!btnClose);
  };

  const btnDelete = (e) => {
    setTodos(todos.splice(id, 1));
  };

  return (
    <div
      className="card-body"
      onClick={CardCompleted}
      onMouseEnter={HoverHandler}
      onMouseLeave={HoverLeftHandler}
    >
      <div
        className={`border-bottom border-${border} px-4 py-3 d-flex align-items-center cursor-pointer`}
      >
        <div className="card-content w-100">
          <div
            className={`circle circle-${border} ${
              completed ? "circle-active" : ""
            } `}
          />
          <div className="card-text-content w-85 d-flex justify-content-between align-items-center ">
            <span>{completed ? <strike>{title}</strike> : title}</span>
            {btnClose ? (
              <img
                className="bg-dark px-2 py-1"
                src={CrossIcon}
                alt="cross-icon"
                width="15"
                height="15"
                onClick={btnDelete}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
