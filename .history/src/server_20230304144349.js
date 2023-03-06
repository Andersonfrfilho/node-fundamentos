import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    return response.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({ id: 1, name: 'John Doe', email: 'johndoe@example.com' })
    return response.writeHead(201).end()
  }

  console.log(method, url)
  return response.writeHead(404).end('Hello World!')
})

server.listen(3333)
