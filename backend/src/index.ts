import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import movies from './movies.js'

const app = new Hono()

app.use('*', cors());

app.get('/', (c) => {
  return c.text('Movie Board API - Created by Chavez')
})

app.route('/movies', movies);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
