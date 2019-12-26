import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Taskinfo from './taskinfo.js';
import taskservice from './taskservice.js';

function App() {
    const [tasks, setTasks] = useState([]);
    //const [newTask, setNewTask] = useState("");
    const [newTask, setNewTask] = useState({ name: "", desc: "", start: "", end: "" })
    const taskChangeHandler = (event, field) => {
        const tempTask = { ...newTask };
        tempTask[field] = event.target.value;
        setNewTask(tempTask);
    }
    const getTasks = () => {
        taskservice
            .getAll()
            .then(allTasks => {
                setTasks(allTasks);
            })
    };
    useEffect(getTasks, []);
    //console.log(tasks);
    const addTask = event => {
        event.preventDefault();
        const testTask = {
            name: newTask.name,
            desc: newTask.desc,
            start: newTask.start,
            end: newTask.end
        };
        taskservice.add(testTask)
            .then(response => {
                let tempTasks = tasks.concat(response);
                setTasks(tempTasks);
                setNewTask("");
            })
    }
  return (
    <div className="App">
          <div>
              <h1>Add task</h1>
              <form>
                  <input type="text" value={newTask.name} onChange={e => taskChangeHandler(e, "name")} placeholder="Task name"></input>
                  <br />
                  <input type="text" value={newTask.desc} onChange={e => taskChangeHandler(e, "desc")} placeholder="Description"></input>
                  <br />
                  <input type="datetime-local" value={newTask.start} onChange={e => taskChangeHandler(e, "start")} placeholder="Start time"></input>
                  <br />
                  <input type="datetime-local" value={newTask.end} onChange={e => taskChangeHandler(e, "end")} placeholder="End time"></input>
                  <br />
              </form>
              <button onClick={addTask}>Add task</button>
              <Taskinfo tasks={tasks} />
          </div>
    </div>
  );
}

export default App;
