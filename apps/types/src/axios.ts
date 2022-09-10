import * as z from 'zod';
import ParamsWithId from 'backend/src/helpers/ParamsWithId';

export interface MessageResponse {
  message: string;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export type ParamsWithId = z.infer<typeof ParamsWithId>;

export interface RequestValidators {
  params?: z.AnyZodObject;
  body?: z.AnyZodObject;
  query?: z.AnyZodObject;
}
