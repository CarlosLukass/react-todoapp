import React, { useContext } from "react";
import { todoReducerContext } from "../../hoc/todoReducerContext";
import { TaskItem } from "./TaskItem";
import { AddNewTask } from "./AddNewTask";

export const TasksList = () => {
  
  const { state, dispatch } = useContext(todoReducerContext);

  return (
    <>
      {state.length >= 1 ? (
        // Task Items
        <ul className="container list-group list-group-flush p-0">
          {state.map((task) => (
            <TaskItem key={task.id} task={{ ...task }} dispatch={dispatch} />
          ))}
        </ul>
      ) : (
        // Screen "add your frist task"
        <div>
          <img
            className="img-resp mx-auto d-block"
            src="./assets/addnewtask.gif"
            alt=""
          />
          <h4 className="first-task-title">Add your first task</h4>
        </div>
      )}

      <AddNewTask />
    </>
  );
};
