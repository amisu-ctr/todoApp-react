import { useEffect, useState } from 'react';
import './style.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
  // const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  //MAKE CHECKBOX TOGGLABLE
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  }

  //DELETE TODO
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      //returns todos array except the clicked one
      //if todos id is not equal to clicked one keep it otherwise remove it
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmitt={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

//fragment - an element that has no tag at all <></>
