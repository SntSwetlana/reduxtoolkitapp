import React, {useState} from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import InputFields from "./component/InputFields";

interface toDo {
    id: string,
    text: string,
    complete: boolean
}

function App() {
  const [todos, setTodos] = useState<{id: string; text: string; completed: boolean}[]>([]);
  const [text, setText] = useState('');
  const addTodos = (() => {
      console.log('press the button')
      if(text.trim().length){
          setTodos([
              ...todos,
              {
                  id: new Date().toISOString(),
                  text,
                  completed: false,
              }
          ])
          setText('');
      }
  });

  const removeTodo = (todoId: any) => {
      setTodos(todos.filter(todo => todo.id !== todoId ))
  }

  const toggleTodoComplete = (todoId: any) => {
      setTodos(todos.map(
          todo => {
              if (todo.id !== todoId) return todo;
              return {
                  ...todo,
                  completed: !todo.completed
              }
          }
      ))

  }

  return (
    <div className="App">
        <InputFields text={text} addTodos={addTodos} setText={setText}/>
        <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
