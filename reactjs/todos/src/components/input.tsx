// @flow 
import * as React from 'react';
import { Todo } from '../models/todo';

type Props = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void;
};

export const TextInput: React.FC<Props> = (props: Props) => {
    return (
        <div className='form-container'>
            <form action="" method="post" onSubmit={(e) => props.handleAdd(e)}>
                <input 
                    type="text"
                    name="task"
                    id=""
                    value={props.todo} 
                    onChange={(e) => props.setTodo(e.target.value)}
                    className="text-input"
                />
                <button type="submit">Go</button>
            </form>
        </div>
    );
};