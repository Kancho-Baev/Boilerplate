import { ObjectId } from 'mongodb';
import * as z from 'zod';

const ParamsWithId = z.object({
  id: z
    .string()
    .min(1)
    .refine(
      val => {
        try {
          return new ObjectId(val);
        } catch (error) {
          return false;
        }
      },
      {
        message: 'Invalid ObjectId'
      }
    )
});

export default ParamsWithId;
