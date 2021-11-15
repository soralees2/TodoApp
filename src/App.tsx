import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Sample from './Sample';
import './TodoList/todo.css';
import TodoList from './TodoList/TodoList';
function App() {
  return (
		<>
			{/* <Sample /> */}
			<TodoList></TodoList>
		</>
  );
}

export default App;
