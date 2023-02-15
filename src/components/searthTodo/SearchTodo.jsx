import React, { useState } from "react";

export const SearchTodo = ({findTodos}) => {
  const [searchValue, setSearchValue] = useState('');

  const findTodo = (value) => {
    setSearchValue(value);
    findTodos(value)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Todo"
        value={searchValue}
        onChange={(event) => findTodo(event.target.value)}
      />
    </div>
  );
};
export default SearchTodo;
