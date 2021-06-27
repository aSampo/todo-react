import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/task";
import { useState } from "react";

function App() {
  const [listOfTask, setNewTask] = useState([]);

  function addNewTask(event) {
    event.preventDefault();
    setNewTask([...listOfTask, event.target.elements.taskInput.value]);
    event.target.elements.taskInput.value = '';
  }

  //falta agregar key al array y funcionalidad borrar
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Input newTaskAdded={addNewTask} />
        {listOfTask.map((task) => (
          <Task task={task} />
        ))}
    </div>
  );
}

export default App;
