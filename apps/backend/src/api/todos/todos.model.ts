import * as z from 'zod';

import { db } from '../../db';
import type { Todo as TodoType } from 'types';

export const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean()
});

export const Todos = db.collection<TodoType>('todos');
