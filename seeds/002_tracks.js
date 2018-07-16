exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('tracks').insert([{
        id: 1,
        user_id: 2,
        title: 'Durty Knees',
        cover: '',
      	desc: 'Clean yourself up with this fresh beat',
        track_url: '',
        duration: 153,
        tempo: 165,
        price: 0.00,
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 2,
        user_id: 1,
        title: 'Red Bull',
        cover: '',
      	desc: 'this track gives you wings',
        track_url: '',
        duration: 180,
        tempo: 120,
        price: 9.99,
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      }
      ])
    ])
    .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('tracks_id_seq', (SELECT MAX(id) FROM tracks))")
      })
  })
}
