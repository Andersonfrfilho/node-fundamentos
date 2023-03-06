
export class Database {
  database = {}

  insert(table) {
    const data = this.database[table] ?? []

    return data
  }

  select(table, data) {

  }
}