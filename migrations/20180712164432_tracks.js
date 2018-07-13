exports.up = function(knex, Promise) {
  return knex.schema.createTable('tracks', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.integer('user_id').notNullable().references('users.id').onDelete('cascade')
    table.string('title', 255).notNullable().defaultTo('')
    table.string('cover', 255).defaultTo('')
    table.string('desc', 255).defaultTo('')
    table.integer('duration').notNullable().defaultTo(0)
    table.integer('tempo').notNullable().defaultTo(0)
    table.decimal('price').defaultTo(0.00)
    // table.timestamps(true, true)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tracks')
}
