import React, { useState } from "react";
import { render } from "react-dom";

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

const TitleComponent = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="text-lg">{props.title}</h1>
      <h2 className="text-sm">{props.description}</h2>
    </div>
  );
};

const DebTodoList = () => {
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
      isComplete: false,
    },
    {
      name: "Todo 5",
      isComplete: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [newName, setNewName] = useState("");

  const removeItem = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
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
    setEditingTodoIndex(null);
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

  return (
    <div className="m-4">
      <TitleComponent
        title="Todo MVC"
        description="Todo MVC powered by react"
        user={{
          name: "John",
          age: 40,
        }}
      />
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {list.map((listItem, index) => {
          const isEditing = editingTodoIndex === index;

          return (
            <li key={index} className="flex items-center">
              {isEditing ? null : (
                <button
                  type="button"
                  className="h-6 w-6 flex items-center justify-center border border-gray-500 rounded-full"
                  onClick={() => toggleCompletion(index)}
                >
                  {listItem.isComplete ? <Check /> : null}
                </button>
              )}
              {isEditing ? (
                <form onSubmit={handleEditedTaskSubmit}>
                  <input
                    type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                    onKeyUp={(event) => {
                      if (event.key === "Escape") {
                        setEditingTodoIndex(null);
                      }
                    }}
                    onBlur={() => setEditingTodoIndex(null)}
                    autoFocus
                  />
                </form>
              ) : (
                <p
                  className="ml-3"
                  onDoubleClick={() => {
                    setEditingTodoIndex(index);
                    setNewName(listItem.name);
                  }}
                >
                  {listItem.name}
                </p>
              )}
              {isEditing ? null : (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="ml-6 px-2 py-1 border"
                >
                  X
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
export default DebTodoList;
