import {useState} from 'react';
import style from './App.module.css'
import AddTodo from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';


function App() {
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

const removePost = (id)=>{
    const todos = todo.filter(item => item.id !== id)
    setTodos(todos)
}
const addNewTodo = (newtodo) =>{
  setTodos([
    ...todo,
    {
      id: Date.now(),
      title: newtodo
    }
  ])
}


  return (
    <div>
       <AddTodo addNewTodo={addNewTodo}/>
      <TodoList todo={todo} removePost={removePost}/>
    </div>
    

    
  )
}

export default App
