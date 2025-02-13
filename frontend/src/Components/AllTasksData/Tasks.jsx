import React, { useState } from "react";
import Task from "./Task";

function Tasks({ dataList }) {
  return (
    <>
      <div className="w-1/2 border-black border-1 mx-auto rounded-sm bg-sky-100 p-4">
        {dataList.length > 0 ? (
          dataList.map((item, index) => (
            <Task key={index} title={item.title} task={item.task} />
          ))
        ) : (
          <p>Data not found!</p>
        )}
      </div>
    </>
  );
}

export default Tasks;
