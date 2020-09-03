import React,{useCallback} from "react";

export const TaskItem = React.memo(({task, dispatch}) => {
  const {id, task:name, category} = task

  const handleRemoveTask = useCallback(() => {
    const action = {
      type: 'delete',
      payload: id
    } 
    dispatch(action)
  }, [id, dispatch])

  return (
    <>
    {
      (category === 'important')
      ? // Category: Important Task
      <li className="list-group-item d-flex align-items-center">
      <span className="p-0 mr-1" role="img" aria-label="trash">⭐</span>
      <p className="m-0 p-0 important-task">{name}</p>
      <button className="btn-delete ml-auto p-0" onClick={handleRemoveTask}> <span role="img" aria-label="trash">🗑️</span> </button>
      </li>
      : // Category: Normal Task
      <li className="list-group-item d-flex align-items-center justify-content-between">
      <p className="m-0">{name}</p>
      <button className="btn-delete" onClick={handleRemoveTask}> <span role="img" aria-label="trash">🗑️</span> </button>
      </li>
    }

    </>
  );
})
