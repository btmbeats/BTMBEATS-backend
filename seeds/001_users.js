exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return Promise.all([knex('users').insert([
        {
          id: 1,
          artist_name: 'Burnsidion',
          email_address: 'ian.burnside89@gmail.com',
          hashed_password: '',
          created_at: '2018-02-05T14:26:16.000Z',
          updated_at: '2018-02-05T14:26:16.000Z'
        }, {
          id: 2,
          artist_name: 'White Mystery',
          email_address: 'michaeltshields@gmail.com',
          hashed_password: 'fuckmylifetoo',
          created_at: '2018-02-05T14:26:16.000Z',
          updated_at: '2018-02-05T14:26:16.000Z'
        }
      ])]).then(function() {
      // Moves id column (PK) auto-incrementer to correct value after inserts
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
  })
}
