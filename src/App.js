import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [listOfTask, setNewTask] = useState([]);

  function addNewTask(event) {
    event.preventDefault();
    setNewTask([...listOfTask, {description: event.target.elements.taskInput.value, key: Math.floor(Math.random() * Date.now())}]);
    event.target.elements.taskInput.value = '';
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Input newTaskAdded={addNewTask} />
        {listOfTask.map((task) => (
           // eslint-disable-next-line
          <Task key={task.key} task={task} deleteTask={event => setNewTask(listOfTask.filter(item => item.key != event.target.id))} />
        ))}
    </div>
  );
}

export default App;
