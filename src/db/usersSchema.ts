import { pgTable,integer,varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";



export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email : varchar({ length: 255 }).notNull().unique(),
    password : varchar({ length: 255 }).notNull(),
    role: varchar({ length: 255 }).notNull().default("user"),
    name : varchar({ length: 255 }),
    address: varchar({ length: 255 }),
});


export const createUserSchema = createInsertSchema(usersTable).omit({ id: true as never,role:true as never});
export const loginUserSchema = createInsertSchema(usersTable).pick({ email:true as never,password:true as never});