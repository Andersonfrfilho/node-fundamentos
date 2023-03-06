import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

const databases = new Database()

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  if (method === 'GET' && url === '/users') {
    return response.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body
    users.push({ id: 1, name, email })
    return response.writeHead(201).end()
  }

  console.log(method, url)
  return response.writeHead(404).end()
})

server.listen(3333)

