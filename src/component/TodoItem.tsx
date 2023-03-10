import React from "react";
interface TodoItemProps{
    id: any,
    text: string,
    completed: boolean,
    removeTodo:any,
    toggleTodoComplete:any
}

const TodoItem = (props: TodoItemProps) => {
    const {id, text, completed, removeTodo, toggleTodoComplete} = props;
    return (<li key={id}>
        <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodoComplete(id )}
        />
        <span>{text}</span>
        <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
    </li>)
}

export default TodoItem