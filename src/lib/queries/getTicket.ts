import { db } from "@/db"
import { tickets } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getTicket(id: number) {
    const customer = await db.select()
        .from(tickets)
        .where(eq(tickets.id, id)).limit(1)

    return customer[0]
}