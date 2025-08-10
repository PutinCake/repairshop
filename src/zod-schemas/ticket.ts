import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"
import { tickets } from "@/db/schema"

export const insertTicketSchema = createInsertSchema(tickets, {
    title: (schema) => schema.min(1, "Title is required"),
    description: (schema) => schema.min(1, "Description is required"),
    tech: (schema) => schema.email("Invalid email address"),

})

export const selectTicketSchema = createSelectSchema(tickets)

export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
