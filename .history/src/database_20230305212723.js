
import fs from "node:fs/promises"

export class Database {
  #database = {}

  #persist() {
    fs.writeFile('db.json', JSON.stringify(this.#database))
  }

  insert(table) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }
  }

  select(table, data) {
    const data = this.#database[table] ?? []

    return data
  }
}