import {useState} from 'react'
import {TodoItem} from '../TodoItem/TodoItem'
import style from './TodoList.module.css'

export const TodoList = () => {
    const [todo, setTodos] = useState([
        {
            id:  1,
            title:  'Do HomeWork'    
        },
        {
            id:  2,
            title:  'Go shopping'    
        },
        {
            id:  3,
            title:  'Do cleaning'    
        },
        
        
    ])

    const removePost = ()=>{
        
    }

  return (
    <div className={style.todos}>
        {todo.map((item, index) => 
        <TodoItem 
        key={index.id} 
        removePost={removePost}
        title ={item.title}/>
        )}
    </div>
  )
}
export default TodoList
