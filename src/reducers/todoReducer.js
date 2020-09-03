export const todoReducer = (state=[], action) => {

  switch (action?.type) {
    case "add": // Add New Task
      if(action.payload.category === "important"){
        console.log('is important')
        return [action.payload, ...state]
      } else {
        console.log('is normal')
        return [...state, action.payload]
      };
    
    case "complete": // Mark Pending or Complete Status Task
      return state.map( todo => {
        if(todo.id === action.payload){
          switch(todo?.status){
            case 'pending': 
              return {
                ...todo,
                status: 'complete'
              }
            case 'complete':
              return {
                ...todo,
                status: 'pending'
              }
            default:
              return todo
          };
        }else{
          return todo
        }
      });

    case "delete":  // Delete existing task
      return state.filter( todo => todo.id !== action.payload);
  
    default:
      return state
  }

}