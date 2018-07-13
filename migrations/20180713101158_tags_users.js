exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags_users', function(table) {
    table.increments()
    table.integer('user_id').notNullable().references('users.id')
    table.integer('tag_id').notNullable().references('tags.id')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags_users')
}
