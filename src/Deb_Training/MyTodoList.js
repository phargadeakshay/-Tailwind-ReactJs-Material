import React, { useState } from "react";
import Check from "./Check";

const MyTodoList = () => {
  const [list, setList] = useState([
    {
      name: "Todo 1",
      isComplete: false,
    },
    {
      name: "Todo 2",
      isComplete: false,
    },
    {
      name: "Todo 3",
      isComplete: false,
    },
    {
      name: "Todo 4",
      // isComplete: false,
      isComplete: false,
    },
    {
      name: "Todo 5",
      isComplete: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingTodoIndex, seteditingTodoIndex] = useState(null); // it store index
  const [newName, setNewName] = useState(""); // newName variable is used to store todo-content after edit and save it in the list varible
  const removeElement = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
    console.log(newTask);
  };
  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    setList([
      ...list,
      {
        name: newTask,
        isComplete: false,
      },
    ]);
    setNewTask("");
  };
  const toggleCompletion = (index) => {
    setList([
      ...list.slice(0, index),
      {
        ...list[index],
        isComplete: !list[index].isComplete,
      },
      ...list.slice(index + 1),
    ]);
  };

  const handleEditedTaskSubmit = (event) => {
    event.preventDefault();
    const index = editingTodoIndex;

    setList([
      ...list.slice(0, index),
      {
        ...list[index],
        name: newName,
      },
      ...list.slice(index + 1),
    ]);
    seteditingTodoIndex(null);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>To do mvc</h1>
        <h3>To MVC Powered by React</h3>
      </div>
      <ul>
        {list.map((curlemt, index) => {
          const isEditing = editingTodoIndex === index;
          console.log("check boolean", isEditing, index, editingTodoIndex);
          return (
            <li className="flex gap-x-2 p-2 items-center" key={index}>
              {isEditing ? null : (
                <button
                  className=" flex items-center justify-center h-6 w-6 border  border-black rounded-full"
                  onClick={() => toggleCompletion(index)}
                >
                  {curlemt.isComplete ? <p>✔</p> : null}
                </button>
              )}

              {/* ------------------------------- */}
              {isEditing ? (
                <form onSubmit={handleEditedTaskSubmit}>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => {
                      setNewName(e.target.value);
                    }}
                    onBlur={() => seteditingTodoIndex(null)}
                    autoFocus
                    onKeyUp={(e) => {
                      if (e.key === "Escape") {
                        seteditingTodoIndex(null);
                      }
                    }}
                  />
                </form>
              ) : (
                <p
                  onDoubleClick={() => {
                    seteditingTodoIndex(index);
                    setNewName(curlemt.name);
                  }}
                >
                  {curlemt.name}
                </p>
              )}

              {/* ------------------------------- */}
              {isEditing ? null : (
                <button
                  className="cursor-pointer"
                  onClick={() => removeElement(index)}
                >
                  ✖
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          type="text"
          autoFocus
          onChange={handleNewTaskChange}
          value={newTask}
          className="mt-4 border border-gray-800"
        />
      </form>
    </div>
  );
};

export default MyTodoList;
