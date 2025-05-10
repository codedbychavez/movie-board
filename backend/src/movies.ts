import { Hono } from "hono";
import movies from './data/movies.json' with { type: 'json' };

const app = new Hono();

app.get('/', (c) => {
  return c.json(movies);
})

export default app