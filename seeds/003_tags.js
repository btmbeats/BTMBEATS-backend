exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('tags').insert([{
        id: 1,
        name: 'Hip-Hop',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 2,
        name: 'Metal',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 3,
        name: 'Soul',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 4,
        name: 'Energetic',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      }, {
        id: 5,
        name: 'Angsty',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      }
      ])
    ])
  })
}
