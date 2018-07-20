exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('artist_name', 255).defaultTo('')
    table.string('email_address', 255).notNullable().defaultTo('')
    table.specificType('hashed_password', "char(60)").notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
