import React from 'react';

import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import FilterTask from './components/FilterTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <header className="app-header p-4">
      <h1 className="text-center">Todo List</h1>
    </header>
    <div className="container py-4 text-center">
      <AddTask />
      <FilterTask />
      <ListTask />
    </div>
  </div>
  );
}

export default App;
