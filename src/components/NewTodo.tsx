import React, { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (textInputRef.current && !textInputRef.current.value) {
      return;
    }

    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);

    if (textInputRef.current) {
      textInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="todo-text">Co masz do zrobienia?</label>
      <div>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">Dodaj</button>
      </div>
    </form>
  );
};

export default NewTodo;
