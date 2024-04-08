
import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import users from '../models/users.js';
import todos from '../models/todos.js';
import { config } from 'dotenv';

config();
const connectionString = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode 
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

export const allUsers=  async () => await db.select().from(users);
export const allTodos = async () => await db.select().from(todos)
