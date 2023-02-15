import React, {useState} from 'react'


export const AddTodo = ({addNewTodo}) => {
    const [todoTask, setTodoTask] = useState('')

    const addTodo = (todoTask) => {
        addNewTodo(todoTask)
        setTodoTask('')
    }
  return (
    <div>
        <input 
            type="text" 
            placeholder='enter todo' 
            value={todoTask} 
            onChange={(event) => setTodoTask(event.target.value)}
        />
        <button onClick={() => addTodo(todoTask)}>Add</button>
    </div>
  )
}
export default AddTodo