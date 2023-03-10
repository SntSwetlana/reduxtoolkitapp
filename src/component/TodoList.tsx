import TodoItem from "./TodoItem";
interface TodoListProps{
    todos:any ,
    toggleTodoComplete:any,
    removeTodo:any
}
const TodoList = (props: TodoListProps) => {
    const {todos ,toggleTodoComplete, removeTodo} = props;
    return (<ul>
        {
            todos.map( (todo: any) => (
                <TodoItem
                    key={todo.id}
                    toggleTodoComplete={toggleTodoComplete}
                    removeTodo={removeTodo}
                    {...todo}
                />
            ))
        }
    </ul>)
}
export default TodoList