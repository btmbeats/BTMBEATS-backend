// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/beats-dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/beats-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
