import http from 'node:http'

const server = http.createServer((req, res) => {

})

server.listen(3334)

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream()
})