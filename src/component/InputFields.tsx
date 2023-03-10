import React from "react";
interface InputFieldsProps{
    text:string,
    setText: any,
    addTodos: any,
}
const InputFields = (props: InputFieldsProps) => {
    const { text, setText, addTodos}=props;
    return (
        <label>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodos}>Add Todo</button>
        </label>
    )
}

export default InputFields