import { useEffect, useState } from "react";
import style from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { SearchTodo } from "./components/searthTodo/SearchTodo";
import { Loader } from './components/Loader/Loader';


function App() {
  const [todo, setTodos] = useState([]);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      setLoding(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setLoding(false);
      setTodos(data);
    } catch (error) {
      alert(error);
    }
  };

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

      {loding ? (
        <Loader />
      ) : (
        <TodoList todo={todo} removePost={removePost} />
      )}
    </div>
  );
}

export default App;
