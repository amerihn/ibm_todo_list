import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInput, setListInput] = useState('');

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  }; // add heading function
  const handleAddList = (index) => {
    if (listInput.trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInput);
      setTodos(newTodos);
      setListInput('');
    }
  }; // add todo list items
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; // delete heading with list

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {/* display to-do heading */}
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3> {/* Display the heading here */}
              <button className="delete-button-heading" onClick={handleDeleteTodo}>
                Delete Heading </button>
            </div>
            {/* Form display list */}
            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className='todo_inside_list'>
                  <p>{list}</p>
                </li>
              ))}
            </ul>
            <div className='add_list'> 
              <input type="text" className='list-input' placeholder='Add List'
                value={listInput}
                onChange={(e) => setListInput(e.target.value)}
              />
              <button className="add-list-button" onClick={() => handleAddList(index)}>
                Add list
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
