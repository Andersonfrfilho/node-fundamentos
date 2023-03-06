// NetFlix & Spotify

//Importação de clientes via CSV (Excel)
//1gb - 1.000.000
// POST /upload import.csv

//10mb/s - 100s
// 100s -> Inserções no banco de dados
// 10mb/s -> 10.000
// Readable streams (upload)/ Writable Streams (escrita)

// Stream ->
// process.stdin.pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

//lendo dados de uma stream
class OneToHundredStream extends Readable {
  index = 1
  _read() {
    const i = this.index++
    setTimeout(() => {


      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)
  }
}
// processa do dado
// chunk é o que ta vindo do OneToHundredStream é o buffer
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString())
  }
}
//primeira instancia esta lendo os dados
//pipe esta escrevendo os dados em uma stream de escrita
new OneToHundredStream().pipe(new MultiplyByTenStream())