import React from 'react'
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text:"Cortar Cebolla", completed : true },
  {text:"Aprender Reactjs", completed : false },
  {text:"Llorar con la Llorona", completed : false },
  {text:"LALALAL", completed : false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
