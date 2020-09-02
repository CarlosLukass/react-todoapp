import React, {useReducer, useEffect} from 'react'
import { HeaderToDo } from './components/header/HeaderToDo'
import { TasksList } from './components/tasks/TasksList'
import { todoReducer } from './reducers/todoReducer'
import { todoReducerContext } from './hoc/todoReducerContext'


// Valor inicial de mis todos
const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || []
}

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init)
  
  useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify( state))
    
  }, [state])

  // Render
  return (
    <>

    <todoReducerContext.Provider value={{state, dispatch}} >

      <HeaderToDo />
      <TasksList />




    </todoReducerContext.Provider>
      
    </>
  )
}
