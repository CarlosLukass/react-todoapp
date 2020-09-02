import React, { useContext } from "react";
import { todoReducerContext } from "../../hoc/todoReducerContext";

export const HeaderToDo = () => {
  const { state } = useContext(todoReducerContext);

  return (
    <>
      <div className="container mt-2">

        <div className="d-flex flex-row align-items-center justify-content-between">
          <img src="./assets/menu.png" alt="" className="btn-menu" />
          <p className="welcome-user"> Todo App </p>
          <div className="item">
          <span className="notify-badge">1</span>
          <img src="./assets/avatar.jpg" alt="" className="avatar" />
          </div>
        </div>

        <h1 className="task-title">Shopping</h1>
      </div>

      <div className="container  status-todo">
        <div className="status m-0">
          {state.length >= 1 ? (
            <span className="badge badge-pill badge-primary">
              {state.length}
            </span>
          ) : (
            <span></span>
          )}
          <span className="status-active">Pending</span>
        </div>

        {/* <div className="status">
          <span className="badge badge-pill badge-primary">3</span>
          <span>Complete</span>
        </div>

        <div className="status">
          <span>Notes</span>
        </div> */}
      </div>

      <hr />
    </>
  );
};
