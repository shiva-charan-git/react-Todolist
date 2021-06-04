import React, { useState } from "react";
import "./todoapp.css";

export default function TodoApp() {
function TodoApp() {
  const [task, setTask] = useState("");

  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
@@ -15,57 +14,69 @@ export default function TodoApp() {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isComplete: false,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
  const deletetask = (e, id) => {
    e.preventDefault();
    console.log(id);
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const extra = (e, id) => {
  const taskCompleted = (e, id) => {
    e.preventDefault();
    let elem = tasklist.findIndex((e) => e.id == id);
    let newtasklist = [...tasklist];
    newtasklist[elem] = {
      ...newtasklist[elem],
      isComplete: true,
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id == id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newtasklist);

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Add task here..."
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
      />{" "}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>{" "}
      </button>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isComplete ? "crossText" : "listitem"} key={t.id}>
              {t.value}{" "}
              <button className="completed" onClick={(e) => extra(e, t.id)}>
                completed
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}{" "}
      <br />
      ) : null}
    </div>
  );
}

export default TodoApp;