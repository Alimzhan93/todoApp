import { useEffect, useState } from "react";
import style from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { SearchTodo } from "./components/searthTodo/SearchTodo";

function App() {
  const [todo, setTodos] = useState([
    {
      id: 1,
      title: "Do HomeWork",
    },
    {
      id: 2,
      title: "Go shopping",
    },
    {
      id: 3,
      title: "Do cleaning",
    },
  ]);

  useEffect(() =>{
    getTodos()
  },[])

  const getTodos = async() =>{
    const responce = fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await responce.json()
    console.log(responce);
}





  const removePost = (id) => {
    const todos = todo.filter((item) => item.id !== id);
    setTodos(todos);
  };
  const addNewTodo = (newtodo) => {
    setTodos([
      ...todo,
      {
        id: Date.now(),
        title: newtodo,
      },
    ]);
  };

  // const findTodo = (value) => {
  //   const todos = todo.filter((item) => item.title.includes(value));
  //   return todos
  //   // setTodos(todos);
  // };

  return (
    <div>
      <AddTodo addNewTodo={addNewTodo} />
      <hr />
      {/* <SearchTodo findTodos={findTodo} /> */}
      <TodoList todo={todo} removePost={removePost} />
    </div>
  );
}

export default App;
