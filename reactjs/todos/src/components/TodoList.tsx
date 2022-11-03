import React from 'react';
import { Todo } from '../models/todo';
type Props = {
    todos: Todo[]
}

export const TodoList = ({todos}: Props) => {
    return (
        <div className="todos-container">
            { todos.map((todo) => (
                <p key={todo.id}>{todo.task}</p>
            ))}
        </div>
    );
}
