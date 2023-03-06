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

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  _read() {
    const i = this.index++
  }
}