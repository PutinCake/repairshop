import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.min(1, "First name is required"),
    lastName: (schema) => schema.min(1, "Last name is required"),
    address1: (schema) => schema.min(1, "Address is required"),
    city: (schema) => schema.min(1, "City is required"),
    state: (schema) => schema.length(2, "State is required"),
    zip: (schema) => schema.regex(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid Zip code. User 5 digits or 5 digits followed by a hyphen and 4 digits"),
    email: (schema) => schema.email("Invalid email"),
    phone: (schema) => schema.regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number. Use the format XXX-XXX-XXXX"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;

