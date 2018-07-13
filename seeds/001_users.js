exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
      knex('users').insert([{
        id: 1,
      	first_name: 'Ian',
        last_name: 'Burnside',
        date_of_birth: '1989-10-27',
        email_address: '',
        hashed_password: '',
        artist_name: 'Burnsidion',
        location: 'Boulder',
        avatar: '',
      	bio: 'const = headbang',
        soundcloud: '',
        google: '',
        facebook: '',
        instagram: 'https://www.instagram.com/burnsidion/',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      },{
        id: 2,
        first_name:'Michael',
        last_name: 'Shields',
        date_of_birth: '1988-04-30',
        email_address: 'michaeltshields@gmail.com',
        hashed_password: '',
        artist_name: 'White Mystery',
        location: 'Boulder',
        avatar: '',
        bio: 'Muggle in the streets, wizard with the sheet music',
        soundcloud: 'https://soundcloud.com/michael-shields-5',
        google: '',
        facebook: 'https://www.facebook.com/michaelthomasshields',
        instagram: 'https://www.instagram.com/shieldsy123/',
        created_at: '2018-02-05T14:26:16.000Z',
        updated_at: '2018-02-05T14:26:16.000Z'
      }
      ])
    ])
  })
}
