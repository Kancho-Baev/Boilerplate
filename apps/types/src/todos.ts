import { WithId } from 'mongodb';
import * as z from 'zod';
import { Todo as TodoModel } from 'backend/src/api/todos/todos.model';

export type Todo = z.infer<typeof TodoModel>;
export type TodoWithId = WithId<Todo>;
