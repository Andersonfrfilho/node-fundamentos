import http from 'node:http'

const users = []

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()
  console.log(fullStreamContent.name)
  if (method === 'GET' && url === '/users') {
    return response.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({ id: 1, name: 'John Doe', email: 'johndoe@example.com' })
    return response.writeHead(201).end()
  }

  console.log(method, url)
  return response.writeHead(404).end()
})

server.listen(3333)

