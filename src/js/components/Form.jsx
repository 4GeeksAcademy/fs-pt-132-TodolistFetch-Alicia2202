import React, { useState } from "react";

const Form = ({ addTask}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
		e.preventDefault();
		addTask(inputValue);
        setInputValue("");
	};

return (
    <form onSubmit={handleSubmit} className="w-100 my-2">
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Escribe tu tarea" className="form-control bg-light"/>
        <input type="submit" hidden />
    </form>
)
};

export default Form