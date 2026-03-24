import React, { useState } from "react";

const Form = ({ addTask}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
		e.preventDefault();
		addTask(inputValue);
        setInputValue("");
	};

return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Escribe tu tarea" className="form-control w-100 w-md-50"/>
        <input type="submit" hidden />
    </form>
)
};

export default Form