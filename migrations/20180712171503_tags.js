exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('name', 255).notNullable().defaultTo('')
    // table.timestamps(true, true)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags')
}
