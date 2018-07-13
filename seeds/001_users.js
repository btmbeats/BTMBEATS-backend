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
        date_of_birth: '10/27/1989',
        email_address: '',
        hashed_password: '',
        user_name: 'Burnsidion',
        user_location: 'Boulder',
        user_avatar: '',
      	user_bio: 'const = headbang',
        user_genres: 'Metal',
        following: [],
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
        date_of_birth: '04/30/1988',
        email_address: 'michaeltshields@gmail.com',
        hashed_password: '',
        user_name: 'White Mystery',
        user_location: 'Boulder',
        user_avatar: '',
        user_bio: 'Muggle in the streets, wizard with the sheet music',
        user_genres: 'Hip-Hop',
        following: [],
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
