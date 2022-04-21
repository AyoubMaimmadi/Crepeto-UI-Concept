const Pool = require('pg').Pool

// Public config for development and testing
module.exports = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'crepeto',
  password: 'password1',
  port: 5432,
})
