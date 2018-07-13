exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('first_name', 255).notNullable().defaultTo('')
    table.string('last_name', 255).notNullable().defaultTo('')
    table.date('date_of_birth').notNullable().defaultTo(knex.raw('now()'))
    table.string('email_address', 255).notNullable().defaultTo('')
    table.specificType('hashed_password', "char(60)").notNullable()
    table.string('artist_name', 255).notNullable('').defaultTo('')
    table.string('location', 255).notNullable('').default('')
    table.string('avatar', 255).defaultTo('')
    table.string('bio', 255).defaultTo('')
    table.string('following', 255).defaultTo('')
    table.string('soundcloud', 255).defaultTo('')
    table.string('google', 255).defaultTo('')
    table.string('facebook', 255).defaultTo('')
    table.string('instagram', 255).defaultTo('')
    // table.timestamps(true, true)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
