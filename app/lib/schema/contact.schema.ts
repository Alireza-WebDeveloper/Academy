import { z } from 'zod';

export const createContactSchema = z.object({
  fullname: z.string().min(1, 'نام و نام خانوادگی الزامی است'),
  email: z.string().email('ایمیل معتبر نیست').min(1, 'ایمیل الزامی است'),
  message: z.string().optional(),
});

export type CreateContactSchema = z.infer<typeof createContactSchema>;
