import { pgTable, text, serial } from 'drizzle-orm/pg-core';

const users = pgTable('todo_users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
});

export default users;