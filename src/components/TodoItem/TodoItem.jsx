import React from 'react'
import style from './TodoItem.module.css'

export const TodoItem = (props) => {
  return (
    <div className={style.todo_item}>
        <div className={style.todo_content}>
          <strong>{props.title}</strong>
        </div>
        <button onClick={props.removePost} className={style.todo_delete}>Remove</button>
    </div>
    
  )
}
export default TodoItem