import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { todoReducerContext } from "../../hoc/todoReducerContext";
import Popup from "reactjs-popup";
import { useCallback } from "react";

export const AddNewTask = React.memo(() => {
  const { dispatch } = useContext(todoReducerContext);

  const [formValue, handleInputChange, resetInput] = useForm({
    id: "",
    task: "",
    status: "",
    category: "",
  });

  const handleAddTask = useCallback(() => {
    if (formValue.task.length >= 1) {
      const action = {
        type: "add",
        payload: {
          id: new Date().getTime(),
          task: formValue.task,
          status: "pending",
          category: formValue.category,
        },
      };
      dispatch(action);
      resetInput();
    }
  }, [resetInput, dispatch, formValue])

  return (
    <Popup
      trigger={<button className="addNewTask"> + </button>}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div>
          <h2 className="title-add">Add New Task</h2>
          <hr />
          <form onSubmit={handleAddTask}>
            <input
              className="form-control"
              name="task"
              type="text"
              placeholder="Buy something..."
              value={formValue.task}
              autoComplete="false"
              onChange={handleInputChange}
            />

            <select
              onChange={handleInputChange}
              name="category"
              value={formValue.category}
              className="form-control mt-2"
              id=""
            >
              <option value="normal">Normal</option>
              <option value="important">Important</option>
            </select>

            <button
              type="submit"
              className="btn btn-primary btn-block mt-2"
              onClick={(e) => {
                e.preventDefault();
                handleAddTask();
                close();
              }}
            >
              Agregar Tarea
            </button>
          </form>
        </div>
      )}
    </Popup>
  );
})
