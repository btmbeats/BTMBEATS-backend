exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags_tracks', function(table) {
    table.increments()
    table.integer('track_id').notNullable().references('tracks.id')
    table.integer('tag_id').notNullable().references('tags.id')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags_tracks')
}
