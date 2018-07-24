exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('tracks').insert([{
        id: 1,
        user_id: 2,
        title: '808 Trap Bass and Snare',
        cover: 'http://bridgingthemusic.com/wp-content/uploads/2014/08/btm-white.png',
      	desc: 'Trapped in the haus, Gucci!',
        track_url: 'https://soundcloud.com/White_Mystery/808TrapBassSnare',
        duration: '3:45',
        tempo: 165,
        price: 0.00,
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 2,
        user_id: 1,
        title: 'Metal Rhythm Backing',
        cover: 'http://bridgingthemusic.com/wp-content/uploads/2014/08/btm-white.png',
      	desc: 'For 7 string guitars in dmin',
        track_url: 'https://soundcloud.com/Burnsidion/MetalRhythmBacking',
        duration: '2:36',
        tempo: 120,
        price: 3.99,
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
