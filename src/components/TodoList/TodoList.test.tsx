import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import mockData from "../../mockData";

describe("TodoList", () => {
  it("should render a list of todos", () => {
    render(<TodoList todos={mockData} updateTodo={function (id: number): void {
      throw new Error("Function not implemented.");
    } } removeHandler={function (id: number): void {
      throw new Error("Function not implemented.");
    } } />);

    mockData.forEach((todo) => {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
    });
  });
});
