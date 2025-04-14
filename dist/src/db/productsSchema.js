import { integer, pgTable, varchar, doublePrecision } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { usersTable } from "./usersSchema.js";
export const productsTable = pgTable("products", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().references(() => usersTable.id),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }),
    price: doublePrecision(),
    Image: varchar({ length: 255 }),
});
export const CreateProductSchema = createInsertSchema(productsTable).omit({ id: true });
export const updateProductSchema = createInsertSchema(productsTable).omit({ id: true }).partial();
