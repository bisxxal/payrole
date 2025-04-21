import { z } from 'zod'
export const adminForm = z.object({
    name: z.string().min(3 ,'name must be atleast 3 characters'),
    service: z.string().min(3 ,'service must be atleast 3 characters'),
    tax: z.coerce.number().min(1, { message: "tax is required!" }),
    price:z.coerce.number().min(1, { message: "price is required!" }),
  })
export type TAdminForm = z.infer<typeof adminForm>  