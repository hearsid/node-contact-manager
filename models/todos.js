import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

const todos = pgTable('todo_items', {
    id: serial('id').primaryKey(),
    name: text('name'),
    status: boolean('status'),
    user_id: integer('user_id').references('users', 'id')
});

export default todos;