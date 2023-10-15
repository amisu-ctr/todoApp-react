import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmitt } /**or props.submit */) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // setTodos((currentTodos) => {
    //   return [
    //     ...currentTodos,
    //     {
    //       id: crypto.randomUUID(),
    //       title: newItem,
    //       completed: false,
    //     },
    //   ];
    // });
    onSubmitt(newItem);

    setNewItem(''); //clears the search input area
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
