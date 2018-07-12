// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/user-dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/user-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
