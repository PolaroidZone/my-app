import React from "react";
import TodoItem from "./TodoItem";

type todoProps = {
  todos: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
}

const TodoList: React.FC<todoProps> = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
