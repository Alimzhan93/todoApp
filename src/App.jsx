import { useEffect, useState } from "react";
import style from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { SearchTodo } from "./components/searthTodo/SearchTodo";
import { Loader } from "./components/Loader/Loader";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [todo, setTodos] = useState([]);
  const [loding, setLoding] = useState(false);
  const [todoCount, setTodoCount] = useState()

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getTodos();
  }, [counter]);

  const getTodos = async (limit = 10, page = 1) => {
    try {
      setLoding(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params:{
            _limit: limit,
            _page: page
          }
        });
      
      // const data = await response.json();
      setTodoCount(response.headers['x-total-count'])
      setLoding(false);
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const getPagesNumber = (todoCount , limit = 10) =>{
    const pages = Math.ceil(todoCount / limit) //10
    const pagesArr = []

    for (let index = 0; index < pages; index++) {
      pagesArr.push(index + 1)
    }
    return pagesArr
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
      <span>{counter}</span>
      <button onClick={() => setCounter(prev => prev +1)}>Increase counter</button>
      <AddTodo addNewTodo={addNewTodo} />
      <hr />
      {/* <SearchTodo findTodos={findTodo} /> */}

      {loding ? <Loader /> : <TodoList todo={todo} removePost={removePost} />}

      <Pagination numberArr={getPagesNumber(todoCount, 10)}/>
    </div>
  );
}

export default App;
