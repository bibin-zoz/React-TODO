import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todo, setTodos]=useState([])

    const addTodo= todo=>{
        setTodos([...todo,{id:uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todo)
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}
