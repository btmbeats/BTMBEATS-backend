exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags_tracks').del().then(function() {
    // Inserts seed entries
    return Promise.all([knex('tags_tracks').insert([
        {
          id: 1,
          track_id: 2,
          tag_id: 1,
          created_at: '2018-02-05T14:26:16.000Z',
          updated_at: '2018-02-05T14:26:16.000Z'
        }, {
          id: 2,
          track_id: 1,
          tag_id: 1,
          created_at: '2018-02-05T14:26:16.000Z',
          updated_at: '2018-02-05T14:26:16.000Z'
        }
      ])
    ])
    .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('tags_tracks_id_seq', (SELECT MAX(id) FROM tags_tracks))")
      })
  })
}
