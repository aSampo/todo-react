import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input/Input";
import { useState } from "react";

function App() {
  function addNewTask(event) {
    event.preventDefault();
    setNewTask(event.target.elements.taskInput.value);
    console.log(event.target.elements.taskInput.value);
    event.target.elements.taskInput.value = "";
  }

  const [newTask, setNewTask] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input newTaskAdded={addNewTask} />
      </header>
    </div>
  );
}

export default App;
