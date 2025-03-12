import { useState } from "react"


export const AddNumber = ( { addNumber } ) => {
  
  const [inputNumber, setInputNumber] = useState(0);  

  const onChange = ( event ) => {
    setInputNumber(event.target.value);
  }

  const onSubmit = (event) => {
      event.preventDefault()
      addNumber(inputNumber);
  }    

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="number"
            onChange = { onChange }
        />
    </form>
  )
}
