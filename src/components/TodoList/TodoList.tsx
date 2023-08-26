import React from "react";
import TodoItem from "./TodoItem";

type todoProps = {
  todos: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
  updateTodo: (id: number) => void;
  removeHandler: (id: number) => void;
}

const TodoList: React.FC<todoProps> = ({ todos, updateTodo, removeHandler}) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeHandler={removeHandler} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
