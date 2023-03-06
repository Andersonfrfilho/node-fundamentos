import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de usuario')
  }

  if (method === 'POST' && url === '/users') {
    users.push({ id: 1, name: 'John Doe' })
    return response.end('Criação de usuario')
  }

  console.log(method, url)
  return response.end('Hello World!')
})

server.listen(3333)

