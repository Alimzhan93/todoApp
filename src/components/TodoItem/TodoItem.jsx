import React from 'react'
import style from './TodoItem.module.css'


export const TodoItem = ({todo, removePost}) => {
  return (
    <div className={style.todo_item}>
        <div className={style.todo_content}>
          <strong>{todo.title}</strong>
        </div>
        <button onClick={()=>removePost(todo.id)} className={style.todo_delete}>Remove</button>
        
    </div>
    
  )
}
export default TodoItem