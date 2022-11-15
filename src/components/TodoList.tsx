import React from "react";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo, index) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          //   todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
