import { db } from '@/db';
import { customers } from '@/db/schema';
import { ilike, or, sql } from 'drizzle-orm';

export async function getCustomerSearchResults(searchText: string) {
    const q = searchText.trim();
    if (!q) return [];

    const term = `%${q.replace(/\s+/g, '%')}%`;

    const results = await db
        .select()
        .from(customers)
        .where(
            or(
                ilike(customers.email, term),
                ilike(customers.phone, term),
                ilike(customers.city, term),
                ilike(customers.zip, term),
                ilike(sql`concat(${customers.firstName}, ' ', ${customers.lastName})`, term),
            ),
        )
        .orderBy(customers.lastName);

    return results;
}