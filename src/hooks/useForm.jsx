import { useState } from 'react'

export const useForm = (initialState = {}) => {

  const [formValue, setState] = useState(initialState)
  
  const handleInputChange = ({target:input}) => {
    setState({
      ...formValue,
      [input.name]: input.value
    });
  };

  const resetInput = () => {
    setState(initialState)
  }
  
  return [formValue, handleInputChange, resetInput]
}
