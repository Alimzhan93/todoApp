import {useState} from 'react'
import {TodoItem} from '../TodoItem/TodoItem'
import style from './TodoList.module.css'



export const TodoList = ({todo, removePost}) => {
    

  return (
 
   
    <div className={style.todos}>
        {todo.map((item, index) => 
        <TodoItem 
        key={item.id} 
        removePost={removePost}
        todo ={item}/>
        )}
    </div>
    
  
  )
}
export default TodoList
