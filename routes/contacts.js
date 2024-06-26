// todo.js
import express from 'express';
import supabase from '../supabase.js';
import { allTodos } from '../utils/db-pool.js';

const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', async (req, res) => {
    let res2 = await allTodos();
    res.json(res2);

    // let { data: todos, error } = await supabase
    //     .from('todo_items')
    //     .select('*')
    //     .order('id', { ascending: false });

    // if (error) return res.status(500).json({ error: error.message });

    // res.json(todos);
});

/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', async (req, res) => {
    const { title } = req.body;

    let { data: todo, error } = await supabase
        .from('todos')
        .insert([{ title }]);

    if (error) return res.status(500).json({ error: error.message });

    res.json(todo);
});

export default router;