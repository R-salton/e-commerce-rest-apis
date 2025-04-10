import { integer, pgTable, varchar,doublePrecision } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  price: doublePrecision(),
  Image: varchar({ length: 255 }),
 

});
