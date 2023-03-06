
export class Database {
  #database = {}

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