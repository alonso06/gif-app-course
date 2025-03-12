import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onAddCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        onAddCategory( inputValue );
        setInputValue('');
    }   

    return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Escribir categoría"
            onChange={onChange}
            value={inputValue}
        />
    </form>
  )
}
