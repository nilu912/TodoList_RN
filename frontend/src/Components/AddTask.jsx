import React from "react";
import { useState } from "react";
function AddTask({addTaskToList}) {
  const [data, setData] = useState({ title: "", task: "" });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    if(data.title.trim()=="" || data.task.trim()=="")
      alert("Please Fill the data first.")
    let endpoint = "http://localhost:5000/api/addTask";
    const request = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const response = await request.json();
    console.log(response);
    addTaskToList(data);
    setData({title: '', task: ''});
    // console.log(data);
  };
  return (
    <div className="flex flex-col mx-auto my-4 bg-[#FFFBDB] w-1/2 h-100 rounded-lg p-10">
      <form onSubmit={sendData}>
        <h1 className="text-3xl text-[#625834] w-full my-2">Add New Task</h1>
        <h3 className="text-lg">Title</h3>
        <input
          className="text-black border-black border-1 p-1 rounded-sm w-full"
          type="text"
          name="title"
          value={data.title}
          onChange={handleChanges}
          placeholder="Enter your task title!"
        ></input>
        <h3 className="text-lg">Task</h3>
        <input
          className="text-black border-black border-1 p-1 rounded-sm w-full"
          type="text"
          name="task"
          value={data.task}
          onChange={handleChanges}
          placeholder="Enter your task!"
        ></input>
        <div className="flex justify-center my-10">
          <button className="w-1/3 h-10 bg-red-100 rounded-lg border-black border-1">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
