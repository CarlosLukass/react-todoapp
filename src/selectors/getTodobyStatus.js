


export const getTodoByStatus = ({todos, status}) => {

  return todos.filter(todo => todo.status === status);
}