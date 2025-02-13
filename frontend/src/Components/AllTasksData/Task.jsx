import React from 'react'

function Task({title, task, index}) {
  return (
    <div id={`taskNo ${index}`} className='border-1 rounded-sm bg-pink-50 my-1'>
        <h3 className='text-lg p-2'>{title}</h3>
        <h6 className='text-sm px-3 pb-2'>{task}</h6>
    </div>
  )
}

export default Task