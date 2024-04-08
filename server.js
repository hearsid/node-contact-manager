import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import supabase from './supabase.js';
import todoRouter from './routes/todo.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());

// GraphQL schema
const schema = buildSchema(`
  type Query {
    todos: [Todo]
  }
  
  type Todo {
    id: ID
    name: String
  }
`);

// Root resolver
const root = {
  todos: async () => {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) throw new Error('Failed to fetch todos from Supabase');
    return data;
  }
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Enable GraphiQL interface for testing
}));

// Use the todo router for routes starting with '/todos'
app.use('/todos', todoRouter);

// Define other routes or middleware as needed

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
