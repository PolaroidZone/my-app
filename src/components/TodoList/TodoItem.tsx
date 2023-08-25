import React from "react";

interface Todo {
  title: string;
}

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => (
  <div>{todo.title}</div>
);

export default TodoItem;
