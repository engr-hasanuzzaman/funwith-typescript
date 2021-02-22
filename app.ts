import { TodoType, getAll} from './all_types';

const todos: TodoType[] = [];
todos.push({status: false, title: 'first todo'});
todos.push({status: true, title: 'first todo'});
todos.push({status: false, title: 'first todo'});
console.log(todos);